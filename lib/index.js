module.exports = function findValue(obj, path) {
    var dotIndex = path.indexOf(".");

    if (!~dotIndex) {
        return obj[path];
    }

    var field = path.substring(0, dotIndex)
      , rest = path.substring(dotIndex + 1)
      ;

    obj = obj[field];
    if (!rest) {
        return obj;
    }
    return findValue(obj, rest);
};
