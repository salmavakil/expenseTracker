const { createContext } = require("react");


const authContext = createContext({username:'',id:'',status:false});

module.exports = authContext;