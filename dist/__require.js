const modules = {};
const aliases = {};
function require(library) {
  const exists = (aliases[library] || library) in modules;
  if (!exists) {
    const frameData = window.frameElement.dataset;
    const err = new Error("Missing library: " + library);
    import(
      /*@vite-ignore*/
      "/" + frameData.busid + "/vite/" + frameData.wcid + "/@vite/client"
    ).then(({ handleMessage }) => handleMessage({ type: "error", err }));
    throw err;
  }
  return modules[library]();
}
export { require as default };
