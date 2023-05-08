'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "515eb17abc26c5efd9a3968cc256068c",
".git/config": "d5344ba315046a9bad885f36a448bb03",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23d8f07010492f6f2e2918152908dd07",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "86d55f7b4563caf0297d84c0da3b5b80",
".git/logs/refs/heads/main": "f3698369aa3104a1fc564ab278ce67c0",
".git/logs/refs/remotes/origin/main": "876391b7247ea975270bc98eb4824740",
".git/objects/00/0c0d92eae4d4fe683bd2e0f028539c6fab371c": "d2b6c8e1ea7c6f997fc309454777bc5d",
".git/objects/02/a4a3944f3f8e936166ba3ac675dcf607e8b0ae": "74b1afc882a184ea3df64583261788cd",
".git/objects/04/13063c8445125107cd332fc5a925a0f91fb85a": "3641876716d9e56b0ee31a408ffe428f",
".git/objects/04/3328105b1359cd7ea464ba814b48ba375d0613": "596384650bb2c483edf76afd9f9459ac",
".git/objects/04/4d17a0130bbb7015dc9db8fab7512a1ef07733": "6d69fbefe677818d612831c1cc05514a",
".git/objects/06/e15fe08a7a076ab9277ffcef855c89fe58bd33": "183f43865d88e02b0abac0ae9198b75b",
".git/objects/0e/89a28d105ebd8ef6b65b83166f39522ac56657": "32ae87dacaa636181ca4478a886c69d2",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/19/0664607aa5587b695e0fee7420abe406de3fc1": "504c4d52b68eb52d27d61fbbc460a1d3",
".git/objects/19/dd174d94673a7e30f0a18379833767627a2ac8": "c1e3c5563ca9f25663618daa5a5b7470",
".git/objects/1c/8197a987b150bebaae3fc54e768f948a41e8c6": "42491e5ee7615d4372bbfe47776cd766",
".git/objects/1d/2ae5374100857d7ee8dad3052f83be1698b962": "127a3f131838f19d8c17c0bb79baf9a2",
".git/objects/1d/a748aa437f84cc2351d643de17eb8b2e21517a": "41bb245ed3b9c1fc09b861fd3679ad02",
".git/objects/22/973fc08bee31ca2aaf43009aac589bcc6a5150": "e978e82afbe806072b73c7a07173c3f4",
".git/objects/2a/224a2d891402ce02c67ceb1191b6580b82bf41": "7d4835028d6add0c3f82dcf47f7ebad8",
".git/objects/2e/8efaee2e4acf52d42bed17fd7b98981b343185": "0caf06cfbceaf467a0eb2a027bca4e28",
".git/objects/2e/a74f510cc0a666e2f0ebcdc051c8289b5b6c2a": "c6b309ba4eb04b551ad83b514c3774f2",
".git/objects/34/539d3726654dd1de794b514950d4125be6060b": "4f6cab0dccefca3298bcc32e7a6b8f75",
".git/objects/34/b86775ec4f24a5558043945c1194f09c43807e": "af239175c0e9c7b4c2636834214cfdf0",
".git/objects/36/194223cfa4fa559395761876487077c9b591f8": "9baa15d0f4f5e39b658a4a3af43a6a6c",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/6069832b3dc809b18e9c4af9adcfa8e9f03cac": "cd15e8a6c4021ef343c3131fc9c2015b",
".git/objects/41/107270a825eee5ec672232c2ef3e6a619c5155": "225dcfda1fff0f2859433a0c01a6c2a5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/06f1efc49fef2bdb1ca8783ddcd79a16ce66d3": "41f781c69ceef8bbc65109eed314cf56",
".git/objects/4a/59d465c6271ef484d8e064a4e19821f81fac16": "3859b5ac0be4119da005de4dfe8e3eda",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/51/7f2657d886f89ab5f30af3be18c0b4f6bd718d": "fce93ac441732416ae4a8bcd05784a17",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/8e32e5605c54d1a2194661fcb810fcab39d7a4": "4b43f64ca5f8e22308e6d32356008a80",
".git/objects/57/f20a338e73c19aec05b4b4ea3d9f0f8a11b4db": "df88a69bbf8a0aff3375e21b87bfcb92",
".git/objects/5b/e2ba297734a4b18f7a62af1ae2d1371aa16322": "96eb0be6a9dd8b37f2c9ec382f774b51",
".git/objects/61/f649ff7db18be593d4da4bb4b8255c01ae2778": "0b7b73149ec4642ed67b1dd7f51a998b",
".git/objects/62/2aeae07dc47c3d9d4c2779473d63089aca75fd": "5ac581379a4afea11c89defad26d1661",
".git/objects/64/7e6da7b0b341d7aac897ee4b510890e4999e19": "15f0d5f1effffaef398df25e3a38c659",
".git/objects/66/7ed61d30a37766fd901c43fc5728b0708aa230": "596b723ef164cb13cfaf0e828a2d1d0b",
".git/objects/68/199cf2e7e7a557f67d1438f41b0cf7813f63fe": "07fc8a37993e5bea873bcc2f92a4e3da",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/b3991d3c3f1e8409400bf9a2fd613a1bcfb39b": "b1544b893e9cc367cc8f4eb3fcaa3bae",
".git/objects/71/4a6f0ae308c013433c219ae863b9992340caff": "9bad974bee6abd01fc8263f2034b5446",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/44a467053bfdc656931161b87e8b338c5c76ec": "4bb4b947aec081324e49a8ebe77716d5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/876e750081435c68aaa475be1262cee4781c36": "f18858e5f2a7ba9a2d403c8c7491ba41",
".git/objects/86/f4d12551ef1410eaa9cabe33b8556a896e0939": "4e53e23588f6e9e98467cf0cb6d1e3ed",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/239887c766946c1a167da13188a893278146a1": "3afeb1338900174d83d4a2f650f35022",
".git/objects/9e/02ed7ea46f779f372c4734d1451787a8a002ad": "49937202a17ab5277a245a9f55c71388",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/267c59544299bd39fe423383871e5cd9ddf840": "59663e34c29b7addbc0e1819c69baff5",
".git/objects/a4/4a5889a0ef8b4a398a6c2e095f1e3fcf9f946a": "10fae401c5682fecb550050b40a93301",
".git/objects/a6/240522d3336ec94ed373ae6ce49e8a9bf64396": "5cb12b48dde99053a15b074188e8dc3b",
".git/objects/a7/7da991211cdc8235aa718551e2edbbc2f41e74": "dad77432b44c0426d75649fa6a70f382",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/83a39cd408220a85dc4b5cef5e0d6c930de12b": "76161fa410dd055e7235285ae62b74c9",
".git/objects/af/21bb9dadc84b5d6521ef614c976ad4f775a291": "37962aa3757d9d5b79ff7b3dd6c5d58b",
".git/objects/af/50cebb18817c0df109e71b764ba277172ac479": "8d0606ef23a0a84cc4a6661f06b566ac",
".git/objects/b3/814813eb4d14a614647a8ceabf20bec74f7d5c": "e28478b8a6123d3f80e0efb32ac6bc49",
".git/objects/b3/f197869e318d396066541b80a5815b52df6cae": "4ab57b707e37589c049dcb49e22bac89",
".git/objects/b5/7c7540a7a0c51e24964c651b1019cbb3df2a54": "4ea53f0af918091f7c1cc3f0531a31da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8ddb70822b52ff1dc96549067d5fe99cc72606": "67471af358358496317feb67a842fa44",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/b57b65a2feb23517f54e6e96463971d3f6a724": "3e958e92eea3cdf94fdc272c585624b3",
".git/objects/c3/8e39686995efc080f765442d90845dc192d645": "93a89711a5940a62f268e2702cf5bcf4",
".git/objects/c8/8f4c87050c4cced3e11810f0de7cca3df0b23a": "9dbf515f0128499b5da57822d9091e39",
".git/objects/cb/728ae8f8da0f7e5b12387d7fd3ff65e329669f": "bf7cce3d8fe1f54c8867fbbe95ccffc4",
".git/objects/ce/5134c54a0265f23119800cd1ce63138deb20ab": "347ab9066439e9b9aa6c1bf8682395dd",
".git/objects/d0/93855f62d121f3600c0000fddd485d344b1581": "3e0ea9a0d11dbc1c03129c8ba273195a",
".git/objects/d3/ecf4f7c03c14394d7fe938f0618d31c2f80d1c": "701b5e761d0b7c243d849ff02d18f0e5",
".git/objects/d4/d0e92020b10045d826d7c241e18e091c67e6cb": "bdcf77834361dfd575f35c745efce190",
".git/objects/d5/19fd1de7c611628f847c54e928c716db857448": "c4ebb12b7f4bd3406febc45f0e271e51",
".git/objects/d5/38e78231ae8a2258b4caade6f3874f88b8ee1e": "555c5b4b3ebcf493643b20cb53623cea",
".git/objects/d5/bf410e0bd0b01fab0a6354e59fe5bcd41edcd1": "65fb2f8d757e2b907adf2cdc7665421b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/fc1c92d1fb80edec3d6b1ef3f6f9482e0bc7c2": "9235fbfb052a479b08ba17e97b1dd4d7",
".git/objects/de/7267d7be9fbb3b2095f169d0e811fc8827aac9": "d31d3d471e399761546bc0c5d7fab09f",
".git/objects/df/d0dbd6b452f76fa2d8552eabd45ef7e5b07e89": "cee9d1343376d968afcb04c18087da3e",
".git/objects/e4/6ac1ecb10538e2a89c72b11afc27baea235578": "216b6fa683c12cf97e8fda78dc12ef28",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/c2d3b3158335b1e8e7a5535a4335f30bdd8a28": "b8f66520459cffe4464de57611a24a28",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f81e6d59dcf3e29f03c4af0748c00f4c839ba5": "a73c9de97a61610b5ea6b219262cf47a",
".git/objects/ef/dd87b7ed0185a6f07256daba934e58e6a12aa0": "18cf892296f4f3d932e9672b3ba0a81e",
".git/objects/f0/6a4f01ae399de7a7f5b3c39220e8e33c954900": "11ba347413f1f3c31975e162ddfeba5c",
".git/objects/f0/6e55feb4d11a108f67706d7ca6a1428164fc19": "f605345739e6bbda6697a06bed8723c5",
".git/objects/f4/df8d56cc463b7d86ff4f4b518faeb9f0b3fbbe": "95c8cca3f1c4411c8d90dd8dbf912437",
".git/objects/f5/a68ec5ef836d3e54744d25b6674f625ec04f00": "7f762d27b44f4d39bbd3dc43199c5f9d",
".git/objects/f5/c5b1a992e5b8d5a037a217d7d23e3029a3a49e": "b97d25b6ae37d7ec4f494113398cf4f9",
".git/objects/f6/9fdbf4de4e889740f3b618658e056eb8761959": "73edf7c9fa34e51514408716409d9f0e",
".git/objects/f8/de1c28e4233238ccc1fd16b36388b65bdbcc6f": "47676ddf374e2efaddf2b2e37cdf4bda",
".git/objects/fa/5899b99bd587c6af68308c3839fb18a482a56b": "30a954c0f31323b8fb4a51a6635bd736",
".git/objects/ff/068e2edf8bead12332100a857cbea74b00353f": "b375e397831aac17deb13b75e90e7166",
".git/refs/heads/main": "46313feb80379b907914f87862aa4328",
".git/refs/remotes/origin/main": "46313feb80379b907914f87862aa4328",
"assets/AssetManifest.json": "9b8019f7efde41c9ef2f07fd7a3d2cba",
"assets/assets/activities.png": "c5a1b473f4a6e890a9aa7542d4163165",
"assets/assets/backview.jpg": "2241a7ef409f5083e5c34cf414204fb9",
"assets/assets/backview2.jpg": "e46ec530ac868fa423a9039dc5b85615",
"assets/assets/backview3.jpg": "3be297e3ccde65ee4c12347a2ef9d767",
"assets/assets/bedroomA.png": "7ee7c9ddcb419926609ea8591b0c5533",
"assets/assets/bedroomA2.png": "cb51040b889b744c3af84704e43569d1",
"assets/assets/bedroomB.png": "6378c7f4cc43c94d62651a55c0046d1a",
"assets/assets/deck.png": "e8c19e60ecc713a7ec9c4908998d40ce",
"assets/assets/dining1.png": "288f77e253adff99c74105bf051f2580",
"assets/assets/dining2.png": "a6c579a9b6d1d168dba58d1a9810b052",
"assets/assets/flourish_logo.png": "98243c575fb59e87170e952df3e56012",
"assets/assets/food.png": "c46519e36bdca5c06e09249ef7b2efa7",
"assets/assets/frontview.jpg": "19e832c0120ab05d0f247fb607f2c968",
"assets/assets/frontview2.jpg": "3f776c478755e15c98f4a1841fe5d689",
"assets/assets/kitchen.jpg": "767f6a7e13d31788f75cd8aeb0ec143d",
"assets/assets/kitchen.png": "3e3938f6933a7c8de9c5e2da668f41a4",
"assets/assets/kitchen2.jpg": "5da7a17b71f8d026d4b38a8fe9503ca3",
"assets/assets/laundry.png": "c7e123f9d498bdeac672cfe8d3f91ca3",
"assets/assets/living_room.png": "53271a3f296e520418531952d67d50e0",
"assets/assets/main_entrance.png": "a9042da353e3497874ea6e0b264be962",
"assets/assets/master_bed.png": "a28aec1ceba6a1cc9236e3365532c8e5",
"assets/assets/master_bed1.png": "f962e6674332b3dca790be31d400c3f3",
"assets/assets/medication.png": "4418e2a6e72fe7eb2c619c79da52ac1c",
"assets/assets/private_shower.jpg": "6905c925ac7b9405eb014630c61c2657",
"assets/assets/private_shower.png": "2e8fd4be4059360cb177e7e1a0efdc95",
"assets/assets/private_toilet.jpg": "28fc083325572dcabccb783ce8b67f05",
"assets/assets/private_toilet.png": "463fcaa6b9d4aa829a1d5b0dc2b9cd67",
"assets/assets/ramp.png": "7785063db0d38449267c7341c3d3a537",
"assets/assets/shared_bath.jpg": "efd64fbe25e310d563b5ed5897f13e19",
"assets/assets/shared_bath.png": "8ba348578799aef0cb74bff6d5520add",
"assets/assets/shower.png": "f51276a23c07a219c911f034cc0fae4d",
"assets/assets/topview.jpg": "f5560c7666c402ce39d77fd72a4f39a7",
"assets/assets/topview2.jpg": "de370216c117fbd01b4dced70351d99d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e3460ef0a10bb197059a36670e4f6930",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b6510f1c0be6ee867a9d061635c8c2a2",
"/": "b6510f1c0be6ee867a9d061635c8c2a2",
"main.dart.js": "e731a4741665de8119bafbf317e41ae2",
"manifest.json": "96257546732d86b51be5ad84d785277e",
"README.md": "3f469c4ffd830a8ae79502a09d1e834c",
"version.json": "12df2056c6ffbbadd006da93dc523e16"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
