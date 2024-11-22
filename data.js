var APP_DATA = {
  "scenes": [
    {
      "id": "0-1a_entrada",
      "name": "1A_entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.11462338514032844,
        "pitch": -0.00042780942590781024,
        "fov": 1.5141656380141597
      },
      "linkHotspots": [
        {
          "yaw": -0.02580810874062678,
          "pitch": 0.5416204893920629,
          "rotation": 1.5707963267948966,
          "target": "1-2a_distribuidor1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2a_distribuidor1",
      "name": "2A_distribuidor1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.6264106809283003,
        "pitch": 0.03792437126751658,
        "fov": 1.5141656380141597
      },
      "linkHotspots": [
        {
          "yaw": 0.5869840013640975,
          "pitch": 0.5292009198047865,
          "rotation": 12.566370614359176,
          "target": "0-1a_entrada"
        },
        {
          "yaw": -1.0667477074917784,
          "pitch": 0.41657698377877495,
          "rotation": 6.283185307179586,
          "target": "2-3a_distribuidor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3a_distribuidor2",
      "name": "3A_distribuidor2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.9894377047840646,
        "pitch": 0.04979967944219155,
        "fov": 1.5141656380141597
      },
      "linkHotspots": [
        {
          "yaw": 2.108495240676633,
          "pitch": 0.6873596709142831,
          "rotation": 0,
          "target": "3-4a_dorm2"
        },
        {
          "yaw": 0.8392894723599262,
          "pitch": 0.7400603186623158,
          "rotation": 0.7853981633974483,
          "target": "5-6a_bath"
        },
        {
          "yaw": -0.022856214888884452,
          "pitch": 0.4653774120074985,
          "rotation": 0,
          "target": "6-7a_comedor"
        },
        {
          "yaw": -0.8153408689620214,
          "pitch": 0.7897708478264072,
          "rotation": 4.71238898038469,
          "target": "4-5a_dorm1"
        },
        {
          "yaw": -3.073923915747125,
          "pitch": 0.44741514241895075,
          "rotation": 0,
          "target": "1-2a_distribuidor1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4a_dorm2",
      "name": "4A_Dorm2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.127154905312178,
          "pitch": 0.4224923010787105,
          "rotation": 0,
          "target": "2-3a_distribuidor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5a_dorm1",
      "name": "5A_Dorm1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.127462344411537,
          "pitch": 0.373758404199549,
          "rotation": 0,
          "target": "2-3a_distribuidor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6a_bath",
      "name": "6A_Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.979591724832435,
          "pitch": 0.39183964478355904,
          "rotation": 0,
          "target": "2-3a_distribuidor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7a_comedor",
      "name": "7A_Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.4710580723345519,
        "pitch": 0.28152877977547064,
        "fov": 1.44273126168384
      },
      "linkHotspots": [
        {
          "yaw": 1.5380882586784033,
          "pitch": 0.5077066555195877,
          "rotation": 0,
          "target": "7-8a_cocina"
        },
        {
          "yaw": 3.051460382695316,
          "pitch": 0.5023456412038687,
          "rotation": 0,
          "target": "2-3a_distribuidor2"
        },
        {
          "yaw": -1.4912667554452046,
          "pitch": 0.7215919527610115,
          "rotation": 0,
          "target": "8-9a_saln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8a_cocina",
      "name": "8A_Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.056987876636553025,
          "pitch": 0.4700201176303924,
          "rotation": 0,
          "target": "6-7a_comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9a_saln",
      "name": "9A_Salón",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.016434804977501827,
          "pitch": 0.6184438900222187,
          "rotation": 0,
          "target": "6-7a_comedor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VELAZQUEZ A",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
