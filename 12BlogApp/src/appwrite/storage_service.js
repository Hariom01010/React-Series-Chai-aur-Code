import conf from "../conf/conf"
import { Client, Storage, ID } from "appwrite";

export class StorageService{
    client = new Client();
    storage

    constructor(){
        this.client.setEndpoint(conf.projectURL).setProject(conf.projectId)
        this.storage = new Storage(this.client)
    }

    async fileUpload(file){
        try {
            await this.storage.createFile(conf.bucketId, ID.unique(), file)
            return true
        } catch (error) {
            throw error
        }
    }


    async fileDelete(fileID){
        try {
            return await this.storage.deleteFile(conf.bucketId, fileID)  //Here fileID is the featuredImage parameter only which we get from fileUpload()
        } catch (error) {
            throw error
        }
    }

    getFilePreview(fileID){
        return this.storage.getFilePreview(conf.bucketId, fileID)
    }
}

const storageService = new StorageService();

export default storageService;