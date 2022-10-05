module.exports = [
  {
    "folder": "",
    "name": "application",
    "id": "application",
    "main": "server.ts",
    "consumes": [
      "webserver"
    ],
    "provides": []
  },
  {
    "folder": "",
    "name": "webserver",
    "id": "webserver",
    "main": "server.ts",
    "consumes": [],
    "provides": [
      "webserver"
    ]
  }
];