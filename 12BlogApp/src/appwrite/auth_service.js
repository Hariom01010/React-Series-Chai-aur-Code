import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.projectURL).setProject(conf.projectId)
        this.account = new Account(this.client);
    }

    async signUp({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)            
            if(userAccount){
                return this.login({email, password})
            }else{
                return
            }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email, password)            
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession('current')            
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error ", error)
        }
        return null
    }
}

const authService = new AuthService();

export default authService;