interface IPhotoStructure {
  node: INode;
}
interface INode {
  type: string;
  gruop_name: string;
  image: IImage;
}
interface IImage {
  uri: string;
}

function fetcMockPhotos() {
  var edges = [];

  for (var i = 0; i < 300; i++) {
    var image: IImage = {
      uri: `https://picsum.photos/200/300?random=${i}`,
    };
    var node: INode = {
      type: 'Mock',
      group_name: 'uknown',
      image: image,
    };
    var structure: IPhotoStructure = {
      node: node,
    };
    edges.push(structure);
  }
  return edges;
}

export default fetcMockPhotos;
