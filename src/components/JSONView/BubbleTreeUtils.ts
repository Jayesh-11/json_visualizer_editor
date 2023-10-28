export function ToJsonTree(json: any, rootName: string) {
  const JsonTree = {
    name: rootName ?? 'parent',
    value: "children count: " + Object.keys(json).length,
    children: [],
  };

  for (let key in json) {

    const currentObj = {
      name: key,
      value: '',
      children: []
    };

    if (json[key] instanceof Array) {

      currentObj.value = "children count: " + json[key].length;
      currentObj.children = json[key].map((item, index: number) => {
        let obj = { "name": `${key}[${index}]` };
        if (item instanceof Object)
          obj.value = JSON.stringify(item);
        else
          obj.value = item;
        return obj;
      });

      JsonTree.children.push(currentObj);
    }

    else if (json[key] instanceof Object) {
      JsonTree.children.push(ToJsonTree(json[key], key));
    }

    else {
      currentObj.value = json[key];
      JsonTree.children.push(currentObj);
    }
  }

  return JsonTree;
}