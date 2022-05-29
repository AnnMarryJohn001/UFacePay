# UFacePay
Project of Microsoft Engage 2022 program

* UFACE Pay is a payment portal that uses a 2-step verification process for processing payments which includes a pin/password and face verification
* It has 2 option, one is to SignUp and the other is to Proceed Transaction
* A new user can enter details and sign up in the sign up page and after that the user would have to manually upload a photo of theirs to the known-people folder present in the UFace_flask folder. The details of the sign-up is sent to the database hosted on MongoDB Atlas.
* After that one can go to the proceed payment page where our face would be detected and the name would be displayed as input to the name field automatically and can't be tampered. Upon entering the correct account details , one would be able to make transactions successfully.

# How to run the project
1.Clone or download this repository to your local machine<br />
2.Run 
```
npm i
```
to install the node_modules in both UFace App folder as well as the Uface_frontend folder
3. Open command prompt and change the directory to UFace_flask folder and type
```
flask run 
```
4.Then use another command prompt and navigate to UFACE APP folder and type
```
npm run nodemon
```
5.Then in another command prompt navigate to the uface_frontend folder and enter
```
npm start
```
6.To set up the mongoDB atlas connection enter the code in command prompt
```
mongosh "mongodb+srv://cluster0.cvp11.mongodb.net/UFACE" --apiVersion 1 --username AnnMarryJohn
```
Upon entering , type the password<br />
7.Our project is ready to run and will be prompted in the browser
