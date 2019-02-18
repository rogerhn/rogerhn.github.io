var rk_settings = {
  "using_nsfw":false
};
function get_settings(){
  if (localStorage.rk_settings !== undefined) {
    rk_settings = JSON.parse(localStorage.rk_settings);
  } else {
    localStorage.rk_settings = JSON.stringify(rk_settings);
  }
};



function addCss(rule) {
  var css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}
// CSS rules

var rule  = "body {position: relative;}.down_block .imgtosave {display: inline-block;vertical-align: top;margin-right: 5px;width: 75px;}.down_block {position: absolute;right: 0;top: 0;}.down_block a {display: inline-block;background-color: #242424;border-radius: 0 0 1px 1px;border-top: solid 3px #06f;color: #fff;display: inline-block;font-weight: 700;margin-right: 5px;padding: 5px;text-decoration: none;}input.movname {background-color: #000;border: 1px solid #333;color: #fff;font-size: 12px;margin-left: 5px;padding: 2px 4px;width: 436px;height: 18px;}.add_mov {width: 32px;height: 16px;display: inline-block;color: #fff;background-color: green;border: none;padding: 0;position: absolute;bottom: 1px;left: 0;line-height: 16px;}img.imgtosave {display: inline-block;vertical-align: top;margin-right: 5px;}article.card.card--streamate.card--release.js-card {display: none;}.card-thumb.downloaded:after, .site-logo:after {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEUAAAD/////+vr////8+vr9+/v++/v////9+/v8+/v////8+/v8+vr9+vr9+/v++/v9+/v////7+/v9/Pz////8+vr8+/v////8/Pz9+/v9+/v////9+/v8/Pz9+/v////8/Pz9+/v9+/v9+vr8/Pz8/Pz9+/v////////9+/sAAACJxTQ+AAAAKXRSTlMAGzQCYfm6C/3DDcRiqPOwzRJHmxNgyhBU+9cY1lDQFF/kz21XVvYXA2UoPo8AAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wIPDh0ecVr8zwAAAKVJREFUOMvFz9cWgjAQBNAVFcVeoogo2HX+/wc15oQSNssj85bc2RSiLtML+qIPhghHko8BRBPZgamvMTMOzMX5XxYtjmWLr9Z6YxNuVcV3pe9jvXFIgGPKuZnXDpxSn58Ts8ryv1/c8+lq15livSzgpjgvrtCNO+P2kU7M+/yNmjMNxxuNhjsNxmsN1oketlH5H3uGZ75oCE70fCGKSco7+FAX+QItFTAg7n/SjAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMi0xNVQxMzoyOTozMCswMTowMO/Wcp4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDItMTVUMTM6Mjk6MzArMDE6MDCei8oiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==);background-color: #06f;display: inline-block;z-index: 1;}.card-thumb.downloaded:after {content: '';background-position: center;background-repeat: no-repeat;background-size: 16px;height: 22px;position: absolute;left: 1px;bottom: 1px;width: 22px;}.site-logo {position: relative;}.site-logo.downloaded:after, button.remove_buttom {position: absolute;background-position: 4px center;background-size: 14px;background-repeat: no-repeat;height: 18px;}.site-logo.downloaded:after {content: 'Downloaded';left: 0;bottom: -15px;width: 102px;color: #fff;padding: 2px 5px 2px 24px;font-size: 13px;pointer-events: none;}button.remove_buttom {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAxQTFRF////4hsb4hsb4hsb6tWEVQAAAAN0Uk5TAHiHbkwhowAAAfFJREFUWMOF2MGZgkAMhuGwF559LIISbIFSthPszBYowSI4cJF/D7rsTyLzeZuI8IIzk4SIiIj4jvL5OYyuY/6+Ww/D+5wP6DcffWnJBwy62eiiZz5g0sMJUkJ0kiPuUkL00uYEZcQgGeIiZcQkGeIqJUQnOeIuJUQvGeJLyohBMsRFyohJMsRVSojuFVmdcED0r8jmhANieIduRjggpnfo4QRDdH+R1QmG6P8imxMMMeyhmxEMMe2hhxN2RPcfWZ2wI/r/yOaEHTFY6GaEHTFZ6OGEN6LzyOqEN6L3yHY43wvhBD3zMBG0HE+oMRE0l3H9RUaUa+ZAUadTlktmRCHkc9bbToj64BKiEDKiEhKiEhKiEhqIOaKNGOs0/0g4RSwRbcQc0UaMdbmfEE4QS0QbMUe0EWPd9k4JHxFLRBsxR7QRY93+G4QPiJzl+jbhA2KsabBJKIiSaDOipOqMGGs5MLUJfABeApF4m/Sg8FHjn4V/N00YnHI4aXHa08LBpYeLF5c/bSC4BeEmhtsgbaS4FeNmjumAEgqmJExqmBYpsWJqxuSO5QEVGFiiYJGDZRIWWliqYbGH5SIWnFiyctGLZTMW3li6c/GP7QM2INjCcBOEbRQ2YtjKcTOI7SQ2pNjSclOMbTU25tja88uB89cLvy+wKPJEj7I/AAAAAElFTkSuQmCC);bottom: 0;left: 104px;background-color: #242424;color: #e21b1b;font-size: 14px;border: none;padding: 0 8px 0 22px;line-height: 19px;width: 80px;text-align: left;}.mov_settings {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFDWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMi0xNVQyMDo0NDo0My0wMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDItMTVUMjA6NDU6MTUtMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDItMTVUMjA6NDU6MTUtMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIxIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRG90IEdhaW4gMTUlIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmVhOWNkLTdkYTgtZDg0MS1hZTc2LTdmZjk1ODNkMzI0NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphN2JlYTljZC03ZGE4LWQ4NDEtYWU3Ni03ZmY5NTgzZDMyNDUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphN2JlYTljZC03ZGE4LWQ4NDEtYWU3Ni03ZmY5NTgzZDMyNDUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmVhOWNkLTdkYTgtZDg0MS1hZTc2LTdmZjk1ODNkMzI0NSIgc3RFdnQ6d2hlbj0iMjAxOS0wMi0xNVQyMDo0NDo0My0wMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hKtAMAAABwElEQVRYw+2YTS8DURSGT+y69xf8CIk/QSytLCR+g4hEFyR0hcSeiMZXUAQRVFnZSCykH2xFVKKm0yboY9EJc28n6Z1eg0jPuztz8z6TueecezOCRCtpA5oD+okzycSn4oxbKO5zmiTOgJBBj4qF9LgU4I19DjztU8YmXMXLBQGOlK+2bAVYVbxW6oBzJbllBdhRvFJBgG0rwK7itfNfAGdKctMKkNJfVoC0ktywAmzpBSOUqPHqU80KoHuVBIcqWXKesjhWgLLiVcYR4ERvDovYULzW63uQMWi0V0ZYi7LR8gjCcMA4+6Y+yHtPO5vMqpYBBd+KXu7DAUz2oKCsiTEXZg9MqqjQcBh2c21WRQ5V7nwqGwIEYTrgwPlyusXFEV6oUaHqqcJ7CMBow7p3xavGi+ksagR0cWw2i8ymqQ4YCzNNw5ZpT+D2flOjxZiJptFyCEIfD62MiowBoMoQ86GPzNSP3ItcSpyS9nRK0QpQVLyecIVnooxnAS7o8CllZbineO1GfavYbF8d/wrgUEkuWQGSileyDnBYYNHTAo+Wjeb3egLhKuB+2br0uBEGSTDrU4IpC+lew+1fCb8P+ADf6nCngaEtvAAAAABJRU5ErkJggg==');background-repeat: no-repeat;background-size: 24px;position: fixed;cursor: pointer;top: 110px;right: 0px;width: 32px;height: 32px;background-color: #242424;background-position: center;z-index: 10001;}.mov_settings.active, .mov_settings:hover{background-color: #06f;}.settings_backdrop {display: block;position: absolute;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0, 0, 0, 0.1);visibility: hidden;opacity: 0;transition: visibility 0s, opacity 0.7s,background 0.7s linear;z-index:9999;}.settings_backdrop.active {display: block;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0, 0, 0, 0.8);visibility: visible;transition: visibility 0.3s, opacity 0.7s,background 0.7s linear;opacity: 1;z-index:9999;}.mov_collection {display: block;position: fixed;top: 0;width: 540px;botton: 0;background-color: #0c0c0c;border-left: 2px;border-style: solid;border-color: #06f;border-right: none;border-top: none;border-bottom: none;height: 100%;overflow-y: auto;transition: 1s ease;z-index: 10000;}.mov_collection.active {right: 0px;transition: 1s ease;}.mov_collection .movies_saved {display: block;margin: 4px;}.mov_collection .movies_saved:last-child {margin-bottom: 120px;}.mov_collection .mov_block {display: inline-block;position: relative;width: 160px;color: #fff;font-size: 12px;background-color: #222222;margin: 6px 0px 0px 6px;vertical-align: top;height: 160px;}.mov_collection .movs_page_text {display: block;color: #fff;font-size: 15px;margin: 5px 5px 0px;}.mov_collection img.mov_col_img {display: inline-block;width: 150px;margin: 5px 0 0 5px;vertical-align: top;}.mov_collection .mov_col_name {display: inline-block;margin: 5px;width: 150px;height: 64px;overflow: hidden;text-overflow: ellipsis;}.mov_collection .img_down {display: inline-block;width: 18px;height: 18px;position: absolute;bottom: 0;right: 0;padding: 3px 0 0 0;margin: 0;border: none;color: #000;font-size: 16px;}.mov_collection::-webkit-scrollbar {width: 5px;}.mov_collection::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);border-radius: 10px;background-color: #292929;}.mov_collection::-webkit-scrollbar-thumb {border-radius: 10px;-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.5);background-color: #06f;}.toggleimg {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAhICOSt9aK9sAAAB6klEQVRIx8WUTUhUURTH/w9LbTAhJRBNWmdWmEh+LEIqpU3huEkxciHMLhAXbV2I7qQWbRSsdlGbcNHHvlZuFSzoi1CyFD9GeDXj9GvhfdeZd5/DMEN0dvec87vn4/3flf6PUUZ1KXgnq8B0sXgXO+xbQ2n4DlWl4Cn6ipk9wPe4VQgQo476YN8F45Rzjfu8ZZvA1unKaT5+ONzAFBvkWobhgqoTYxwfHPxOLk4Lx6LwVj5CBB6qTg8+72kL47f5ZaF3rAHfecaKU73H9OgzkI0nyJikD1zlJBmS1EuUh2fnOt9sbyMB3scf45ylUqITWHRkE6eXNolq5uwV/ZI4S9I4xsyF7UCaUxHNXzIZk8afpFksmMMDO1Atvxl2qvukqbE5D01sQSSsWFpsuD1UvRcfeGnjTfww0YQkHpvDBlcifpm42bzPeRPttlKb2XdU8MauZSqseYv3SxKVTJI20VccPdDgcysbt3qKeZolYozw1arlBRXZSvC4RyosG4kLXKSWMwzyhM0sfU5Q5oq5MaL6LruOvJeDXeV9Lqxoc+0Td+3kefHLDv6TR9xwG/cCXK91XJKU0ZD3VOK0zqlOJ+RpS6ta8j7ne4M6Cnpt8lzwpTT8iJm3OFySGGWPTW4WiUsSVYd8nH9vfwGt+jW0PAW1owAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMi0xOFQwMTo1Nzo0MyswMTowMBcQUk4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDItMThUMDE6NTc6NDMrMDE6MDBmTeryAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==');background-repeat: no-repeat;background-size: 24px;position: fixed;cursor: pointer;top: 142px;right: 0px;width: 32px;height: 32px;background-color: #242424;background-position: center;z-index: 10001;}.toggleimg.active {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAhICOTmO0d4kAAABs0lEQVRIx+2UT0uUURTGf28YKIwyU6tm04xiIRJkOhpuhL6AbRv6BK2j1i6j9WgUFOWmPkONVFSrwowWaf8WoWH0j3GjMMOvzfU6vr44rcVn9b7POc85555zz4VDHAAkWaRHmaTCMEX6gAZrvOc1L5Pmf0R03Af+MQu/vW9lf3HF53bCM8eyxT3O2eooV21ZszstH3ApOmy5kZI0bakbbkVm0f52+bBr0bXmoI1d8sfmPe4LGw46G6tcdWhbXvZHID86Do6k8k8DWFXPghN+Cvy6JcCc72KmAoBTqQA3AJxVpwA8Zj1YlszhfPip2xMq6t/TtnqYTjk2fCFY5rt2GoHhbn1xmdO7enwBgA/J1zbv+JWL/X9iPnCXM8dXDdZCzP/WHGDJ9UAsOxGc7uyR3w6W864E5rsnt6sYcjWOcc4imHit7TY0vGoCFr1lM3DfbD+mZRej+6YPnbbXglVnnPGSeXu96KO2i/TGUmob7eYmVzgSYzb5zAoNoI9TDLDT7hY1riebWftwzqcdN2HBkf03csx7/sqU/vSuo2n/7Aeli0lGOcMJ8sDf8KC8Sloc4mDiH42ja/T5XPeRAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAyLTE4VDAxOjU3OjU3KzAxOjAwL/V2wwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0xOFQwMTo1Nzo1NyswMTowMF6ozn8AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');background-color: #06f;}.slick-slide img.showing {opacity: 1;}.slick-slide img.hiding {opacity: 0.02;}.slick-slide:hover img.hiding {opacity: 0.2;}.player-video .video-js.showing {opacity: 1;}.player-video .video-js.hiding {opacity: 0.01;}.player-video .video-js.hiding:hover {opacity: 0.5;}article .card-thumb__img img.showing {opacity: 1;}article .card-thumb__img img.hiding {opacity: 0.03;}article:hover .card-thumb__img img.hiding {opacity: 0.2;}.picture-list a img.showing {opacity: 1;}.picture-list a img.hiding {opacity: 0.03;}.picture-list a:hover img.hiding {opacity: 0.3;}.mov_collection img.mov_col_img.showing {opacity: 1;}.mov_collection img.mov_col_img.hiding {opacity: 0.01;}.mov_collection img.mov_col_img.showing:hover {opacity: 0.1;}.model-picture__thumb img.showing {opacity: 1;}.model-picture__thumb img.hiding {opacity: 0.01;}.model-picture__thumb img.hiding:hover {opacity: 0.3;}video#video-banner {display: none;}section.section.hidden-micro-down {display: none;}.card-thumb__img {background-image: none;}";
function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function insertButtons(){

  var aTags = document.querySelectorAll(".js-video-download a");
  var searchText_SD = "SD MP4";
  var searchText_HD = "HD MP4 720P";
  var searchText_1080 = "HD MP4 1080P";
  var found;
  var downlink_sd;
  var downlink_hd;
  var downlink_1080;
  var hide_hd = 0;
  var hide_1080 = 0;

  for (var i = 0; i < aTags.length; i++) {

    var text_to_find = aTags[i].children[0].textContent;
    var downlink = aTags[i].getAttribute("href");
    // Search for SD
    if (text_to_find == searchText_SD) {
      found = aTags[i];
      downlink_sd = ('https://members.realitykings.com'+downlink)
    }
    if (text_to_find == searchText_HD) {
      found = aTags[i];
      downlink_hd = ('https://members.realitykings.com'+downlink)
      hide_hd = 1;
    }
    if (text_to_find == searchText_1080) {
      found = aTags[i];
      downlink_1080 = ('https://members.realitykings.com'+downlink)
      hide_1080 = 1;
    }
  }

  var header = document.getElementsByClassName('player-header');
  var headerinner = header[0];

  var dateblock = document.getElementsByClassName('player-header__date');
  var dateblockinner = dateblock[0];

  var down_SD =  document.createElement("a")
  down_SD.className ="down_sd";
  down_SD.textContent ="Download SD";
  down_SD.href = downlink_sd;

  var down_HD =  document.createElement("a")
  down_HD.className ="down_hd";
  down_HD.textContent ="Download HD 720p";
  down_HD.href = downlink_hd;

  var down_1080 =  document.createElement("a")
  down_1080.className ="down_1080";
  down_1080.textContent ="Download HD 1080p";
  down_1080.href = downlink_1080;

  var down_block =  document.createElement("div")
  down_block.className ="down_block";
  down_block.appendChild(down_SD);
  if(hide_hd){down_block.appendChild(down_HD);}
  if(hide_1080){down_block.appendChild(down_1080);}
  insertAfter(down_block, headerinner);

  var movnameblock =  document.createElement("input");
  movnameblock.className ="movname";
  movnameblock.setAttribute('type', 'text');
  insertAfter(movnameblock, dateblockinner);

  var remove_buttom =  document.createElement("button")
  remove_buttom.className ="remove_buttom";
  remove_buttom.innerHTML = "Remove";
  remove_buttom.style.display = 'none';
  insertAfter(remove_buttom, dateblockinner);
}

function insertImage(){
  var img = document.querySelector('.vjs-poster');
  var style = img.currentStyle || window.getComputedStyle(img, false);
  var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

  var imagetoadd = document.createElement("img")
  imagetoadd.className ="imgtosave";
  imagetoadd.style.width = "75px";
  imagetoadd.style.verticalAlign = "top";
  imagetoadd.src = bi;
  imagetoadd.onerror = function(e) {
    this.style.visibility = 'hidden';
  };
  var down_block = document.querySelector('.down_block');
  down_block.appendChild(imagetoadd);

}

function checktitle(){
  //Movie Page
  var mov_category_block = document.getElementsByClassName('player-header__logo');
  var mov_header = mov_category_block[0];
  var mov_category = mov_category_block[0].title.replace(/ /g, "");

  var mov_category_formatted = '['+mov_category+']';

  var movtitle = document.getElementsByClassName('player-header__title');
  var movtitle_text = movtitle[0].textContent;

  var dateblock = document.getElementsByClassName('player-header__date');
  var dateblockinner = dateblock[0];
  var date = dateblockinner.textContent;
  date = date.replace(/January/g, "01").replace(/February/g, "02").replace(/March/g, "03").replace(/April/g, "04").replace(/May/g, "05").replace(/June/g, "06").replace(/July/g, "07").replace(/August/g, "08").replace(/September/g, "09").replace(/October/g, "10").replace(/November/g, "11").replace(/December/g, "12").replace(/st,/g, "").replace(/nd,/g, "").replace(/rd,/g, "").replace(/th,/g, "").replace(/ /g, ".")


  var movnameblock = document.querySelector('.movname');

  var title_to_save = "";

  document.querySelectorAll('.player-header__actors a').forEach(function (actors) {
    var names = actors.textContent;
    names = names.replace(/[/’"'”:]/g, "");
    title_to_save += names + ", ";

  });

  title_to_save = title_to_save.replace(/(.+), $/, '$1');
  var movname_final = mov_category_formatted + ' ' + title_to_save + ' (' + movtitle_text + ' ' + date + ')';

  movnameblock.value = movname_final;
  var inputCopy = document.querySelector('.movname');
  var down_SD_button = document.querySelector('.down_sd');
  var down_HD_button = document.querySelector('.down_hd');
  var down_1080_button = document.querySelector('.down_1080');
  var remove_buttom = document.querySelector('.remove_buttom');
  var mov_link = document.querySelector('.player-nav__tab--movie');
  mov_link = mov_link.getAttribute("href");
  mov_link = 'https://members.realitykings.com/'+mov_link;

  var mov_id = mov_link.split('/video/full/');
  mov_id = mov_id[1].replace(/\/(.*?)\//g,"");

  var mov_img = document.querySelector('.imgtosave');
  mov_img = mov_img.getAttribute("src");

  var mov_title = movname_final;

  remove_buttom.setAttribute('mov_id', movname_final);

  down_SD_button.addEventListener('click', function () {
    var input_value = inputCopy.value;
    inputCopy.value = input_value + '_SD';
    inputCopy.select();
    document.execCommand('copy');

    if (localStorage.rk_movs) {
      var storage = JSON.parse(localStorage.rk_movs);
      var found = 0;
      for (var i = 0; i < storage.length; i++){
        var stored = storage[i];
        if (mov_id === stored.mov_id){
          mov_header.classList.add("downloaded");
          remove_buttom.style.display = 'inline-block';
          found = 1;
        }
      }
      if(found === 0){
        storage.push({mov_id:mov_id,mov_img:mov_img,mov_link:mov_link,mov_title:mov_title});
        console.log("Added to database using SD button");
        localStorage.rk_movs = JSON.stringify(storage);
        mov_header.classList.add("downloaded");
        remove_buttom.style.display = 'inline-block';
      }
    }
    else {
      console.log("Creating Database");
      var storage = [];
      storage.push({mov_id:mov_id,mov_img:mov_img,mov_link:mov_link,mov_title:mov_title});
      localStorage.rk_movs = JSON.stringify(storage);
      mov_header.classList.add("downloaded");
      remove_buttom.style.display = 'inline-block';
    }
    movs_page_content();
  });
  if(down_HD_button){
    down_HD_button.addEventListener('click', function () {
      var input_value = inputCopy.value;
      inputCopy.value = input_value + '_HD';
      inputCopy.select();
      document.execCommand('copy');

      if (localStorage.rk_movs) {
        var storage = JSON.parse(localStorage.rk_movs);
        var found = 0;
        for (var i = 0; i < storage.length; i++){
          var stored = storage[i];
          if (mov_id === stored.mov_id){
            mov_header.classList.add("downloaded");
            remove_buttom.style.display = 'inline-block';
            found = 1;
          }
        }
        if(found === 0){
          storage.push({mov_id:mov_id,mov_img:mov_img,mov_link:mov_link,mov_title:mov_title});
          console.log("Added to database using HD button");
          localStorage.rk_movs = JSON.stringify(storage);
          mov_header.classList.add("downloaded");
          remove_buttom.style.display = 'inline-block';
        }
      }
      else {
        console.log("Creating Database");
        var storage = [];
        storage.push({mov_id:mov_id,mov_img:mov_img,mov_link:mov_link,mov_title:mov_title});
        localStorage.rk_movs = JSON.stringify(storage);
        mov_header.classList.add("downloaded");
        remove_buttom.style.display = 'inline-block';
      }

    });
    movs_page_content();
  }
  if(down_1080_button){
    down_1080_button.addEventListener('click', function () {
      var input_value = inputCopy.value;
      inputCopy.value = input_value + '_1080P';
      inputCopy.select();
      document.execCommand('copy');

      if (localStorage.rk_movs) {
        var storage = JSON.parse(localStorage.rk_movs);
        var found = 0;
        for (var i = 0; i < storage.length; i++){
          var stored = storage[i];
          if (mov_id === stored.mov_id){
            mov_header.classList.add("downloaded");
            remove_buttom.style.display = 'inline-block';
            found = 1;
          }
        }
        if(found === 0){
          storage.push({mov_id:mov_id,mov_img:mov_img,mov_link:mov_link,mov_title:mov_title});
          console.log("Added to database using 1080 button");
          localStorage.rk_movs = JSON.stringify(storage);
          mov_header.classList.add("downloaded");
          remove_buttom.style.display = 'inline-block';
        }
      }
      else {
        console.log("Creating Database");
        var storage = [];
        storage.push({mov_id:mov_id,mov_img:mov_img,mov_link:mov_link,mov_title:mov_title});
        localStorage.rk_movs = JSON.stringify(storage);
        mov_header.classList.add("downloaded");
        remove_buttom.style.display = 'inline-block';
      }
      movs_page_content();
    });
  }
  document.addEventListener('click',function(e){
    if(e.target && e.target.className === 'remove_buttom'){
      var title = e.parentElement;
      var stored_movtitle = e.target.getAttribute("mov_id");

      var storage = [];
      storage = JSON.parse(localStorage.rk_movs);
      for (var i = 0; i < storage.length; i++){
        var stored = storage[i];
        if (mov_id === stored.mov_id){
          storage.splice(i, 1);
          localStorage.rk_movs = JSON.stringify(storage);
          e.target.style.display = 'none';
          var mov_category_block = document.getElementsByClassName('player-header__logo');
          var mov_header = mov_category_block[0];
          mov_header.classList.remove("downloaded");
        }
      }

    };
    movs_page_content();
  });
}

function insert_movs_page(){
  var toggleimg =  document.createElement("div");
  toggleimg.className ="toggleimg";
  toggleimg.setAttribute('title', 'Toggle NSFW content');
  document.body.appendChild(toggleimg);

  var mov_settings =  document.createElement("div");
  mov_settings.className ="mov_settings";
  document.body.appendChild(mov_settings);

  var settings_backdrop =  document.createElement("div");
  settings_backdrop.className ="settings_backdrop";
  document.body.appendChild(settings_backdrop);

  var mov_collection_page =  document.createElement("div");
  mov_collection_page.className ="mov_collection";
  document.body.appendChild(mov_collection_page);

  var mov_collection_page = document.querySelector('.mov_collection');
  var sidebar_width = mov_collection_page.clientWidth;
  var borderW = getComputedStyle(mov_collection_page,false).getPropertyValue('border-left-width').replace('px', '');
  borderW = Number(borderW);
  var finalBorder = -Math.abs(sidebar_width + borderW);
  mov_collection_page.style.right = finalBorder+'px';
}

function movs_page(){
  var mov_page_button = document.querySelector('.mov_settings');
  var mov_collection_page = document.querySelector('.mov_collection');
  var settings_backdrop_page = document.querySelector('.settings_backdrop');
  var style = mov_collection_page.currentStyle || window.getComputedStyle(mov_collection_page, false);
  var width = style.width.replace(/px/g, "");
  width = -Math.abs(width);
  mov_page_button.addEventListener('click', function () {
    mov_collection_page.classList.toggle('active');
    mov_page_button.classList.toggle('active');
    settings_backdrop_page.classList.toggle('active');
    if(mov_collection_page.classList.contains('active')){
      mov_collection_page.style.right = 0;
    } else {
      mov_collection_page.style.right = width+"px";;
    }
  });
  settings_backdrop_page.addEventListener('click', function () {
    mov_collection_page.classList.toggle('active');
    mov_page_button.classList.toggle('active');
    settings_backdrop_page.classList.toggle('active');
    if(mov_collection_page.classList.contains('active')){
      mov_collection_page.style.right = 0;
    } else {
      mov_collection_page.style.right = width+"px";;
    }
  });
  var mov_page = `<div class="movies_saved">
<div class="movs_page_title">
<p class="movs_page_text">No movies downloaded yet...</p>
</div>
</div>`;
  mov_collection_page.innerHTML = mov_page;
}
//Only on cards page
function check_movs(){
  var mov_thumbs = [];
  document.querySelectorAll('.card-info').forEach(function (link) {
    var card = link.parentElement;
    var mov_id = card.children[1].childNodes[3].attributes[1].value;
    mov_id = mov_id.split('/video/full/');
    mov_id = mov_id[1].replace(/\/(.*?)\//g,"");
    var cardimg = card.children[1];

    if (localStorage.rk_movs) {
      var storage = JSON.parse(localStorage.rk_movs);
      for (var i = 0; i < storage.length; i++){
        var stored = storage[i];
        if (mov_id === stored.mov_id){
          link.classList.add("downloaded");
          cardimg.classList.add("downloaded");
        }
      }
    }
  });
  var url = window.location.href;
  if(url.indexOf("video/full") > -1) {
    var mov_category_block = document.getElementsByClassName('player-header__logo');
    var mov_header = mov_category_block[0];
    var remove_buttom = document.querySelector('.remove_buttom');
    var mov_link = document.querySelector('.player-nav__tab--movie');
    mov_link = mov_link.getAttribute("href");
    var mov_id = mov_link.split('/video/full/');
    mov_id = mov_id[1].replace(/\/(.*?)\//g,"");

    if (localStorage.rk_movs) {
      var storage = JSON.parse(localStorage.rk_movs);
      for (var i = 0; i < storage.length; i++){
        var stored = storage[i];
        if (mov_id === stored.mov_id){
          mov_header.classList.add("downloaded");
          remove_buttom.style.display = 'inline-block';
        }
      }
    }

  }
}

function movs_page_content(){
  if (localStorage.rk_movs) {
    var storage = JSON.parse(localStorage.rk_movs);
    var mov_collect = [];
    var mov_collection_list = "";
    var storage_len = storage.length;
    for (var i = 0; i < storage_len; i++) {
      var mov_id = storage[i].mov_id;
      var mov_img = storage[i].mov_img;
      var mov_link = storage[i].mov_link;
      var mov_title = storage[i].mov_title;
      var imgdown_name = mov_title.replace(/\[/g, "(").replace(/\]/g, ")");
      mov_collection_list += `<div class="mov_block"><a class="img_link" href="${mov_link}"><img class="mov_col_img" src="${mov_img}" ></a></img><p class="mov_col_name">${mov_title}</p><button class="img_down fa fa-download" img_link="${mov_img}" img_name="${imgdown_name}" title="Download image for this movie"></button></div>`;

    }
    var mov_page = `<div class="movies_saved">
<div class="movs_page_title">
<p class="movs_page_text">Movies downloaded:</p>
</div>
${mov_collection_list}
</div>`;
    var mov_collection_page = document.querySelector('.mov_collection');
    mov_collection_page.innerHTML = mov_page;
  }
  check_movs();
}

function movs_page_imgdown(){
  document.addEventListener('click', function (e) {
    if ( e.target.classList.contains( 'img_down' ) ) {
      var img_link = e.target.getAttribute("img_link");
      var img_name = e.target.getAttribute("img_name");
      img_name = img_name.replace(/\(/g, "[").replace(/\)/g, "]")+ '.jpg';
      imageDownload(img_link, img_name)
    };

    if ( e.target.classList.contains( 'toggleimg' ) ) {
      e.target.classList.toggle('active');
      var using_nsfw = rk_settings.using_nsfw;
      var images = document.querySelectorAll('.slick-slide img,.player-video .video-js,article .card-thumb__img img,.picture-list a img,.mov_collection img.mov_col_img,.model-picture__thumb img').forEach(function (image) {
        if (using_nsfw){
          //image.style.opacity = "0.03";
          image.classList.remove("showing");
          image.classList.add("hiding");
          rk_settings.using_nsfw = false;
          localStorage.rk_settings = JSON.stringify(rk_settings);
        } else {
          image.classList.remove("hiding");
          image.classList.add("showing");
          //image.style.opacity = "1";
          rk_settings.using_nsfw = true;
          localStorage.rk_settings = JSON.stringify(rk_settings);
        }

      });
    }
  }, false);
};

function sfw(){
  var toggle_img = document.querySelector('.toggleimg');
  var using_nsfw = rk_settings.using_nsfw;
  var images = document.querySelectorAll('.slick-slide img,.player-video .video-js,article .card-thumb__img img,.picture-list a img,.mov_collection img.mov_col_img,.model-picture__thumb img').forEach(function (image) {
    if (using_nsfw){
      //image.style.opacity = "1";
      image.classList.remove("hiding");
      image.classList.add("showing");
      toggle_img.classList.add('active');
    } else {
      //image.style.opacity = "0.03";
      image.classList.remove("showing");
      image.classList.add("hiding");
    }
  });
}

function imageDownload(url, fileName){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function(){
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = imageUrl;
    tag.download = fileName;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  }
  xhr.send();
}

function RK_buttons(){
  get_settings();
  addCss(rule);
  var url = window.location.href;
  //url = 'https://members.realitykings.com/video/full/
  if(url.indexOf("video/full") > -1) {
    insertButtons();
    insertImage();
    insert_movs_page();
    sfw()
    checktitle();
    movs_page();
    movs_page_content();
    movs_page_imgdown();
    console.log("added RK Buttons");
  }
  else {
    insert_movs_page();
    sfw()
    movs_page();
    movs_page_content();
    movs_page_imgdown();
  }
}
RK_buttons();
