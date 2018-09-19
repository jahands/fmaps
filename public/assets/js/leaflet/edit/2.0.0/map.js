"use strict";window.Cedar=function(u,a,e){var t=a.Cedar;if(!t){t={EditMap:function(n){var c={editingElement:"textarea",counter:0,markerObjects:[],pellOptions:{defaultParagraphSeparator:"p",actions:["bold","italic","underline","olist","ulist","line","link",{icon:"&#x238C;",title:"Undo",result:function(){c.wysiwygEditor.exec("undo")}},{icon:"&#x200f;&#x238C;",title:"Redo",result:function(){c.wysiwygEditor.exec("redo")}}]},fn:{purgeCurrentMarkers:function(){for(var e in c.markerObjects){if(c.markerObjects.hasOwnProperty(e)&&c.markerObjects[e].hasOwnProperty("Cedar")){c.fn.removeMarker(c.markerObjects[e])}}},removeMarker:function(e,t){e.closePopup().removeFrom(n);for(var r in c.markerObjects){if(c.markerObjects.hasOwnProperty(r)&&c.markerObjects[r].hasOwnProperty("Cedar")){if(c.markerObjects[r].Cedar.id===e.Cedar.id){delete c.markerObjects[r]}}}if(t){t.stopPropagation();t.preventDefault()}},exportData:function(){var e=[],t;for(var r in c.markerObjects){t=null;if(c.markerObjects.hasOwnProperty(r)&&c.markerObjects[r].hasOwnProperty("Cedar")){try{t=c.fn.fetchMarkerData(c.markerObjects[r])}catch(r){a.console.log("Error fetching marker data",r,c.markerObjects[r])}if(t){e.push(t)}}}return e},fetchMarkerData:function(e){if(!e.Cedar.text){var t=e.getPopup().getContent().parentElement.parentElement.classList.add("error");e.openPopup();return}return{text:e.Cedar.text,title:e.Cedar.title,coords:e.Cedar.coords}},setTitle:function(e,t){e.Cedar.title=t.target.value},setBodyCommon:function(e,t){e.getPopup().getContent().parentElement.parentElement.classList.remove("error");e.Cedar.text=t},setBody:function(e,t){c.fn.setBodyCommon(e,t.target.value)},setBodyPell:function(e,t){c.fn.setBodyCommon(e,t)},postPopup:function(e,t,r){bodyTextarea.addEventListener("keyup",c.fn.setBody.bind(null,r))},postPopupPell:function(e,t,r){var n=Object.assign({},c.pellOptions,{element:e,onChange:c.fn.setBodyPell.bind(null,r)});c.wysiwygEditor.init(n)},makePopup:function(e,t){t.id=++c.counter;e.Cedar=t;var r=u.createElement("div"),n=u.createElement("div"),a=u.createElement("div"),o=u.createElement("div"),i=u.createElement("div"),d=u.createElement("input"),l=u.createElement(c.editingElement),p=u.createElement("button"),s=u.createElement("button");r.classList.add("cedar-popup-container");a.classList.add("cedar-popup-title");o.classList.add("cedar-popup-body");i.classList.add("cedar-btn-container");p.classList.add("cedar-btn-ok");s.classList.add("cedar-btn-cancel");d.addEventListener("keyup",c.fn.setTitle.bind(null,e));d.placeholder="Marker title";d.value=t.title;a.appendChild(d);n.appendChild(a);l.placeholder="Edit this text";l.value=t.text;o.appendChild(l);n.appendChild(o);s.addEventListener("click",c.fn.removeMarker.bind(null,e));s.textContent="Remove";i.appendChild(s);n.appendChild(i);r.appendChild(n);c.fn.postPopup(l,r,e);return r},importMarkers:function(e){c.fn.purgeCurrentMarkers();for(i in e){if(e.hasOwnProperty(i)){c.fn.loadMarker(e[i])}}},loadMarker:function(e){e.id=++c.counter;var t=L.marker(e.coords);t.addTo(n);t.bindPopup(c.fn.makePopup(t,e));t.Cedar=e;c.markerObjects.push(t)},newMarker:function(e){var t=L.marker([e.lat,e.lng]);t.addTo(n);t.bindPopup(c.fn.makePopup(t,{text:"",title:"",coords:[e.lat,e.lng]}));t.openPopup();c.markerObjects.push(t)}}};n.on("click",function(e){c.fn.newMarker(e.latlng);L.DomEvent.stopPropagation(e)});if(a.pell){c.wysiwygEditor=a.pell;c.editingElement="div";c.fn.postPopup=c.fn.postPopupPell}n.loadedEditor=true;a.console.log("Done loading");return{ExportData:function(){return c.fn.exportData()},ImportData:function(e){c.fn.importMarkers(e)}}}}}else{a.console.log("Getting new instance")}return t}(document,window,window.L);
