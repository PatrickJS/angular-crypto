
angular.module('gdi2290.crypto', [
  'gdi2290.crypto-md5',
  'gdi2290.crypto-base64'
]);

angular.module('ngCrypto', ['gdi2290.crypto']);
angular.module('angular-crypto', ['gdi2290.crypto']);

angular.module('gdi2290.crypto-md5', []);
angular.module('gdi2290.crypto-base64', []);
