var app = new Vue({
  el: '#app',
  data: {
    scanner: null,
    activeCameraId: null,
    cameras: [],
    scans: []
  },
  mounted: function () {
    var self = this;
    self.scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5 });
    self.scanner.addListener('scan', function (content, image) {
<<<<<<< Updated upstream
      self.scans.unshift({ date: +(Date.now()), content: content });
=======
      if ((content.split("-")[0].length = 7) && (content.split("-")[1].length = 2) && (content.split("-")[2].length = 1)) {
        self.scans.unshift({ date: +(Date.now()), content: content });
        fetch("https://hook.us1.make.com/tfme118y55za9wgcebxwau5u8jy3664p", {
          method: "POST",
          body: JSON.stringify({
            Note: content + ": " + prompt('Enter +/- and then the number you would like to add/subtract from inventory.', '') + ": "
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
      }
>>>>>>> Stashed changes
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      self.cameras = cameras;
      if (cameras.length > 0) {
        self.activeCameraId = cameras[0].id;
        self.scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
  },
  methods: {
    formatName: function (name) {
      return name || '(unknown)';
    },
    selectCamera: function (camera) {
      this.activeCameraId = camera.id;
      this.scanner.start(camera);
    }
  }
});
