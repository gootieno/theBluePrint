# theBluePrint

Hi! And welcome to theBluePrint! This application is inspired by the love of cars. A place where one can organize their dream car build and document every step of the way. As an owner of a 1994 Mitsubishi 3000gt, I understand the stuggles of finding good write ups on how to fix an issue with a car. Now there is a place where you can not only document your own repairs and upgrades but store them in a time capsule worth revisiting when working on that dream car in the future. 


## API Endpoints

    
### Blueprint

  - GET /api/garage/:garage_id/blueprints
    
  - POST /api/blueprints
    
  - PUT/PATCH /api/blueprints/:id
    
  - DELETE /api/blueprints/:id

### Category

  - GET /api/blueprint/:blueprint_id/categories

  - POST /api/categories

  - PUT/PATCH /api/categories/:id

  - DELETE /api/categories/:id

### Spec

  - GET /api/:category_id/specs

  - POST /api/specs

  - PUT/PATCH /api/specs/:id

  - DELETE /api/specs/:id

### Project

  - GET /api/:category_id/projects

  - POST /api/projects

  - PUT/PATCH /api/projects/:id

  - DELETE /api/projects/:id
    
 ### Step
 
  - GET /api/:project_id/steps

  - POST /api/steps

  - PUT/PATCH /api/steps/:id

  - DELETE /api/steps/:id
