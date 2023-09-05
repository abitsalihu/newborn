export default [
  {
    name: "envTexture",
    type: "cubeTextureLoader",
    path: [
      "/textures/environmentMap/px.jpg",
      "/textures/environmentMap/nx.jpg",
      "/textures/environmentMap/py.jpg",
      "/textures/environmentMap/ny.jpg",
      "/textures/environmentMap/pz.jpg",
      "/textures/environmentMap/nz.jpg",
    ],
  },
  // {
  //   name: "bakedScene",
  //   type: "textureLoader",
  //   path: "/textures/board_games_baked.webp",
  // },

  // {
  //   name: "backSceneBaked",
  //   type: "textureLoader",
  //   path: "/textures/backSceneBaked.jpg",
  // },

  // {
  //   name: "thirdTexture",
  //   type: "textureLoader",
  //   path: "/textures/thirdTexture.jpg",
  // },

  // {
  //   name: "writtenTexture",
  //   type: "textureLoader",
  //   path: "/textures/juneTexture.jpg",
  // },

  // {
  //   name: "fourthTexture",
  //   type: "textureLoader",
  //   path: "/textures/fifthTexture.jpg",
  // },

  // {
  //   name: "sixthTexture",
  //   type: "textureLoader",
  //   path: "/textures/sixthTexture.jpg",
  // },
  // {
  //   name: "newBorn",
  //   type: "gltfLoader",
  //   path: "/models/newBornBrew.glb",
  // },

  ///! -------- new NEWBORN new --------

  {
    name: "newBorn",
    type: "gltfLoader",
    path: "/models/newBornSimplified.glb",
  },

  {
    name: "glassObjects",
    type: "gltfLoader",
    path: "/models/newBornGlassObjects.glb",
  },

  // {
  //   name: "secondSceneModel",
  //   type: "gltfLoader",
  //   path: "/models/second_scene.glb",
  // },

  //? TEXTURES

  {
    name: "bakedBoardGames",
    type: "textureLoader",
    path: "/textures/board_games_baked.webp",
  },
  {
    name: "bakedMenuTexture",
    type: "textureLoader",
    path: "/textures/baked_MENU_Textures.webp",
  },

  {
    name: "bakedFirstTexture",
    type: "textureLoader",
    path: "/textures/first_baked_texture.webp",
  },

  {
    name: "bakedSecondTexture",
    type: "textureLoader",
    path: "/textures/second_baked_texture.webp",
  },
];
