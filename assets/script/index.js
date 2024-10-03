
// Script accordion
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
 
    // SVG for Down icon
    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;
 
    // SVG for Up icon
    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `;
 
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = upSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = downSVG;
    }
}


// Script Order Online
if (typeof xLogError != 'function') {
    var xLogError = function (error) {
        var req = new XMLHttpRequest();
        var payload = JSON.stringify({ url: document.location.href, line: error.line, stack: error.stack });
        var params = 'message=' + encodeURIComponent(error.name) + '&payload=' + encodeURIComponent(payload) + '&type=embed&level=error';
        req.open('POST', 'https://api.orderonline.id/log', true);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send(params);
    };
}

try {
    if (typeof xEmbedScript != 'function') {
        var xEmbedScript = function () {
            !function(w, d, e, v, id, t, s) {
            if (d.getElementById(id)) return;
            t = d.createElement(e);t.async = !0;t.src = v;t.id = id;
            s = d.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
            }(window, document, 'script', 'https://cdn.orderonline.id/js/embed-v2-slim.min.js?v=8.0.4', 'oo-embed-js');
        };
    }
    if (typeof xEmbedInit != 'function') {
        var xEmbedInit = function (w, n) {
            if (w.ooe) return;
            n = w.ooe = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
            if (!w._ooe) w._ooe = n;
            n.push = n;n.loaded = !0;n.version = '8.0.4';n.queue = [];
        };
    }
    xEmbedInit(window);
    ooe('setup', 'redirect', 'https://lembaredukatif.orderonline.id');
    ooe('init', '5da91e679f05aa6cf53205c9', '66fcf429f2c986f7160fc8d8', null, 'oo-embed-form-lembar-edukatif-pra-sekolah-9381', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":false,"triggerGtm":false});
    if (!window.jQuery) {
        !function(w, d, e, v, id, t, s) {
        if (d.getElementById(id)) return;
        t = d.createElement(e);t.async = !0;t.src = v;t.id = id;
        t.addEventListener('load', xEmbedScript);
        s = d.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
        }(window, document, 'script', 'https://cdn.orderonline.id/js/vendor/jquery.min.js', 'oo-embed-jquery');
    } else {
        xEmbedScript();
    }
} catch (e) {
    xLogError(e);
    throw e;
}