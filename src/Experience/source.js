export default [
  {
    name: "envTexture",
    type: "cubeTextureLoader",
    path: [
      "./textures/environmentMaps/0/px.jpg",
      "/textures/environmentMaps/0/nx.jpg",
      "/textures/environmentMaps/0/py.jpg",
      "/textures/environmentMaps/0/ny.jpg",
      "/textures/environmentMaps/0/pz.jpg",
      "/textures/environmentMaps/0/nz.jpg",
    ],
  },
  {
    name: "bakedTexture",
    type: "textureLoader",
    path: "./textures/textureBaked.jpg",
  },
  {
    name: "newBorn",
    type: "gltfLoader",
    path: "/models/newBornBrew.glb",
  },
];
