import ImageKit from "imagekit";


var imagekit = new ImageKit({
    publicKey : process.env.IMGAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMGAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMGAGEKIT_URL_ENDPOINT,
});


export default imagekit;