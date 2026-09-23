import { Page , Locator} from '@playwright/test';

export class LoginPage {
     readonly page : Page;
     readonly username : Locator;
     readonly password : Locator;
     readonly signin :Locator;

     constructor(page:Page){
        this.page = page;
        this.username = this.page.locator("#login-username");
        this.password = this.page.locator('#login-password');
        this.signin   = this.page.getByRole('button',{name:/sign In/});
     }

        async fill_login_user(username:string){
           await this.username.clear();
           await this.username.fill(username);

        }
        async fill_password(password:string){
          await this.password.clear();
          await this.password.fill(password);
        }

        async submitLogin(){
          await this.signin.click();

        }
        async login (username : string , password : string){

               await this.fill_login_user(username);
               await this.fill_password(password);
               await this.submitLogin();
        }
     }

