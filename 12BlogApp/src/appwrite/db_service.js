import conf from "../conf/conf"
import { Client, Databases, Query } from "appwrite";

export class DbService{
    client = new Client;
    database;
    
    constructor(){
        this.client = this.client.setEndpoint(conf.projectURL).setProject(conf.projectId)
        this.database = new Databases(this.client);
    }

    async createArticle(slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.database.createDocument(conf.databaseId, conf.collectionId, slug, {title, content, featuredImage, status, userId})
        } catch (error) {
            throw error
        }
    }

    async deleteArticle(slug){
        try {
            await this.database.deleteDocument(conf.databaseId, conf.collectionId, slug)
            return true
        } catch (error) {
            throw error
        }
    }

    async updateArticle(slug, {title, content, featuredImage, status}){
        try {
            await this.database.updateDocument(conf.databaseId, conf.collectionId, slug, {title, content, featuredImage, status})
        } catch (error) {
            throw error
        }
    }

    async getArticle(slug){
        try {
            return await this.database.getDocument(conf.databaseId, conf.collectionId, slug)            
        } catch (error) {
            throw error
        }
    }

    async listArticles(){
        try {
            return this.database.listDocuments(conf.databaseId, conf.collectionId, [Query.equal('status', 'active')])            
        } catch (error) {
            throw error
        }
    }
}

const dbService = new DbService();
export default dbService