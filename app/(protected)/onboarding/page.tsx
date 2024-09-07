//two options: 1. create admin/shop, 2. create worker
//
// 1. create admin assigns a shopId (primary key) to be shared between all workers & the admin itself. Also, admin needs to
// specify how many workers they anticipate having (system will automatically add +4 as contingency)
// This is needed because system will create enough worker keys (array of UUIDs as strings, one
// assignable to a worker) which admin can give to each worker to enable them to sign up

// 2. create worker will require shopId
