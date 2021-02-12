import users from "./users.js"; 
import encounters from "./encounters.js";
import roles from "./roles.js";
import patients from "./patients.js";
import allocations from "./allocations.js";
import reports from "./reports.js";

const resources = {
    'reports': reports,
     'users': users,
     'encounters': encounters,
     'roles': roles,
     'patients': patients,
     'allocations': allocations
}

export default {
    get: name => resources[name]
}