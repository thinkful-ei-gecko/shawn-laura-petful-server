
# Petful Project - Thinkful EI34

#### Live app:

#### Link to repo: https://github.com/thinkful-ei-gecko/shawn-laura-petful-server.git


## Team: 
- Shawn Collette
- Laura Elias


  
## Project Description:

This is the backend server for Thinkful's Petful project. Petful is a shelter which follows the first in first out (FIFO) model. Only animals at the top of the queue will be available for adoption. Additionally, vistors to the site will also be place into a FIFO queue; when you're at the top of the queue you will be able adopt.

 ## Endpoints 
|  Endpoint	| Function |
|		--			|		--	 	|
| GET /cat|  Provides the first cat in the cat queue. |
|DELETE /cat |Removes the first cat in the cat queue after it is adopted.|
| GET /dog | Provides the first dog in the dog queue. |
| DELETE /dog  | Removes the first dog in the dog queue after it is adopted. |
| GET /user  | Provides the first person in the user queue. |
| POST /user  | Adds a new person to the user queue. |
| DELETE /user | Removes the first person in the user queue after they are finished adopting. |



  

## User stories

#1:  As a pet lover, I want to go to the Petful adoption site so that I can get more information about the adoption process.
  - The site has a description of the adoption process.
 - It has a meaningful picture that matches its description.
 - A button indicating that I can start the adoption process.
##

#2:  As a user interested in adopting pets, I want to get more information on the pet so that I can make an informed decision.

I am provided the information of pet such as:
- an image of the pet;
- a physical description of the pet;
- its name, sex, age, and breed; and
- a story of its journey to the shelter.
##

#3: As a user interested in adopting pets, I want to have a way to clearly see the pet(s) that I can adopt so that I am not distracted by other pets that are not on the line for adoption.

When I go to the adoption page I should be able to only see the pet that is next in line to be adopted. If there are other pets in line I could see them but I should not be able to adopt them other than the one next in line to be adopted.
##
  
  

#4:  As a user interested in adopting pets, I want to know where I am on line so I know how long I have to wait.

When I go to the adoption page, I should be able to see my place in line and anyone else who is in the line before me.  I should not be able to start the adoption process unless its my turn.
##
  
  

#5:  As a user interested in adopting pets, I want to be able to see the pets that are being adopted by other pet lovers and removed from the shelter so that I know that the pet I am interested in may no longer be available for adoption.

I should be able to see my place in line and anyone else who is in line before me. I should not be able to start the adoption process unless its my turn.

  
##

### Spin up:

1.) Clone repository to your local machine:

    git clone https://github.com/thinkful-ei-gecko/shawn-laura-petful-server.git

  

2.) Install NPM:

    npm install

  

3.) Install the required dependencies:

    npm i

  

4.) Start the server:

    npm start

  ##
  

### Technologies Used:

- Node

- Express

- Heroku


