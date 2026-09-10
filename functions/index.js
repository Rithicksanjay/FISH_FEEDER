const {setGlobalOptions}=require("firebase-functions");
const {onCall}=require("firebase-functions/https");
const {getAuth}=require("firebase-admin/auth");
const {initializeApp}=require("firebase-admin/app");

initializeApp();

setGlobalOptions({maxInstances:10});

exports.logoutOnClose=onCall(async(request)=>{
  if(!request.auth){
    throw new Error("User is not authenticated.");
  }

  await getAuth().revokeRefreshTokens(request.auth.uid);

  return{
    success:true,
    message:"User session revoked."
  };
});