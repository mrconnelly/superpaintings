/* Adapted from postal-art/public/ar/art-volume-viewer.html (colour mode only).
   Target indices and plane ratios arrive from data/paintings.ts, never array order. */
(() => {
  const button = document.querySelector('#start');
  const status = document.querySelector('#status');
  const intro = document.querySelector('#intro');
  const cameraTools = document.querySelector('#camera-tools');
  const cameraStatus = document.querySelector('#camera-status');
  let scene;
  let views = [];
  let activeView = null;
  let starting = false;
  let ready = false;

  function stop() {
    views.forEach(({ video }) => video.pause());
    const system = scene?.systems?.['mindar-image-system'];
    // MindAR's stop() assumes camera AND controller already exist.
    if (system?.controller && system.video?.srcObject) system.stop();
    // Also release any stream left after interrupted camera setup.
    document.querySelectorAll('video').forEach((video) => {
      if (video.srcObject) video.srcObject.getTracks().forEach((track) => track.stop());
    });
  }

  function fail(message) {
    starting = false;
    ready = false;
    activeView = null;
    stop();
    intro.hidden = false;
    cameraTools.hidden = true;
    status.textContent = message;
    button.textContent = 'Try again';
    button.disabled = false;
    button.onclick = () => window.location.reload();
  }

  if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
    fail('Camera access needs a supported browser and HTTPS. Open https://superpaintings.co.uk/ar-viewer in Safari or Chrome on your phone.');
    return;
  }
  if (!window.AFRAME || !window.AFRAME.systems['mindar-image-system']) {
    fail('The viewer could not load. Check your connection and try again.');
    return;
  }

  // MindAR starts target loading from a media event, outside start()'s promise.
  window.addEventListener('unhandledrejection', (event) => {
    event.preventDefault();
    fail('The viewer could not finish loading. Check your connection and try again.');
  });

  const { paintings, targetFile } = JSON.parse(document.querySelector('#painting-data').textContent);
  scene = document.createElement('a-scene');
  scene.setAttribute('mindar-image', `imageTargetSrc: ${targetFile}; autoStart: false; maxTrack: 1; uiLoading: no; uiScanning: no; uiError: no;`);
  scene.setAttribute('color-space', 'sRGB');
  scene.setAttribute('renderer', 'colorManagement: true; physicallyCorrectLights: true');
  scene.setAttribute('xr-mode-ui', 'enabled: false');
  scene.setAttribute('device-orientation-permission-ui', 'enabled: false');
  const assets = document.createElement('a-assets');
  assets.setAttribute('timeout', '10000');
  scene.appendChild(assets);
  const camera = document.createElement('a-camera');
  camera.setAttribute('position', '0 0 0');
  camera.setAttribute('look-controls', 'enabled: false');
  scene.appendChild(camera);

  views = paintings.map((painting) => {
    const video = document.createElement('video');
    video.id = `video-${painting.slug}`;
    video.src = painting.animation;
    video.preload = 'metadata';
    video.loop = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    assets.appendChild(video);

    const target = document.createElement('a-entity');
    target.setAttribute('mindar-image-target', `targetIndex: ${painting.targetIndex}`);
    const plane = document.createElement('a-plane');
    plane.setAttribute('material', `shader: flat; src: #${video.id}`);
    plane.setAttribute('position', '0 0 0');
    plane.setAttribute('width', '1');
    plane.setAttribute('height', String(painting.aspectRatio));
    target.appendChild(plane);
    scene.appendChild(target);
    const view = { video, target };

    target.addEventListener('targetFound', async () => {
      if (!ready) return;
      activeView = view;
      views.forEach((other) => { if (other !== view) other.video.pause(); });
      cameraStatus.textContent = painting.title;
      try {
        await video.play();
        if (activeView !== view) video.pause();
      } catch {
        fail('The animation could not play. Try again to restart the viewer.');
      }
    });
    target.addEventListener('targetLost', () => {
      video.pause();
      if (activeView === view) {
        activeView = null;
        cameraStatus.textContent = 'Point at a Super Painting';
      }
    });
    video.addEventListener('error', () => fail('An animation could not load. Check your connection and try again.'));
    return view;
  });

  scene.addEventListener('arReady', () => {
    ready = true;
    starting = false;
    intro.hidden = true;
    cameraTools.hidden = false;
  });
  scene.addEventListener('arError', () => fail('Camera access failed. Allow camera access in your browser settings, then try again.'));
  scene.addEventListener('loaded', () => {
    button.disabled = false;
    button.textContent = 'Start camera';
  }, { once: true });

  button.onclick = async () => {
    if (starting) return;
    starting = true;
    button.disabled = true;
    status.textContent = 'Allow camera access when your browser asks. Loading the paintings may take a moment.';
    try {
      // Start every play() inside the user gesture, then pause/reset, as in postal-art.
      await Promise.all(views.map(async ({ video }) => {
        await video.play();
        video.pause();
        video.currentTime = 0;
      }));
      if (!starting) return;
      await scene.systems['mindar-image-system'].start();
    } catch {
      fail('The camera or animation could not start. Check camera permission and your connection, then try again.');
    }
  };
  document.body.appendChild(scene);
  window.addEventListener('pagehide', stop);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && (ready || starting)) fail('Camera paused while you were away. Tap Try again to restart.');
  });
})();
