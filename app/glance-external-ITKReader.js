!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(e,n){},436:function(e,n,t){"use strict";t.r(n);var r=t(189),a=t(260),i=t.n(a),o=t(261),f=t(0),s=t(147),c=t(263),u=s.a.convertItkToVtkImage;var d={fileName:"",arrayName:null};function l(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object.assign(n,d,t),f.default.obj(e,n),f.default.algo(e,n,0,1),f.default.setGet(e,n,["fileName","arrayName"]),function(e,n){n.classHierarchy.push("vtkITKDicomImageReader"),e.readFileSeries=function(t){return t&&t.length&&t!==n.files?(n.files=t,Object(c.a)(null,t).then(function(e){var n=e.webWorker,t=e.image;return n.terminate(),t}).then(function(t){var r,a,i,o=u(t,{scalarArrayName:n.arrayName||(r=n.fileName,a=r.lastIndexOf("."),i=a>-1?r.substring(0,a):r,"Scalars ".concat(i))});n.output[0]=o,e.modified()})):Promise.resolve()},e.requestData=function(){e.readFileSeries(n.files,n.fileName)}}(e,n)}var m={newInstance:f.default.newInstance(l,"vtkITKDicomImageReader"),extend:l};t.d(n,"extensions",function(){return p}),t.d(n,"registerToGlance",function(){return w}),r.a.setReadImageArrayBufferFromITK(o.a);var p=Array.from(new Set(Object.keys(i.a).map(function(e){return e.toLowerCase()})));function w(e){e&&(p.filter(function(e){return"dcm"!==e}).forEach(function(n){return e.registerReader({extension:n,name:"".concat(n.toUpperCase()," Reader"),vtkReader:r.a,binary:!0,fileNameMethod:"setFileName"})}),e.registerReader({extension:"dcm",name:"DICOM File Series Reader",vtkReader:m,fileNameMethod:"setFileName",fileSeriesMethod:"readFileSeries"}))}n.default={extensions:p,registerToGlance:w};w(("undefined"==typeof window?{}:window).Glance)}},[[436,0,1]]])});