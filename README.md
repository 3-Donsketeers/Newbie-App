To run this project Locally:

have node package manager (npm) installed
run "npm install" at project root directory
run "npm start" at project root directory

General Explanation:

Put simply, React is a way to turn bits of HTML into "components" (kinda like OOP classes/objects) and then display them on a page. There are much better explanations out there and probably some good AgLearn courses that can explain things better than I can so I'll leave my explanation at that for now and answer questions as we go since that will probably be more useful than me rambling about it here. This React project is basically an amalgamation of code from when you create a default project on Glitch, some other bits of code from online, and my own messing around. App.js is the main file, and it just has a div with a PageRouter in it, which, as you can see in router.js is just a switch of routes to different pages from teh "wouter" module.

File Structure Breakdown:

Components: for all react components. These are kinda like objects if you were to think about it in an OOP way. a component basically just exports a function(s) or variable(s) that other parts of the project can import and use to do things like display content or make calls to the backend.

Pages: One for each page (or screen) of the webapp. In the final product, each should have a route in the PageRouter in router.js. Calling "&lt;Link href=/route-name-here&lt;" around whatever you want to give the functionality to change pages (for example, a button, as in test.js) can give that component that functionality. The pages other than test.js are leftovers/things I was using for testing but haven't removed in case I can still use them for testing. They should definitely be removed at some point.

Styles: For general high level CSS stuff. Mostly remnants of the default Glitch css and could probably do with a rework but aren't going to cause major problems for now. I dont really understand CSS myself but I'm learning.

It won't show on github for some reason but there's another folder in 'packages' called 'express-backend', it's there so if there's time to write a backend that's where it'll go but it depends on time. In the past I've only ever worked where the frontend is run on an Azure static web app and the backend on a regular azure web app, but since this will need to run on Azure gov that probably won't be an option (because for some reason Azure gov has no static web apps). So a big hurdle to adding a backend is figuring out how to run them on the same webapp instead of two where the frontend just makes calls to the backend one, which acts as a REST API. A backend isn't totally necessary since IMO the MVP is just getting some text showing in a somewhat decently formatted way on the screen.

I'm going to create a github project kanban board for planning purposes and share my Figma mockup but right now I'm mostly working on the main page where the info of the Newbie App will show. I've also been planning for a landing page and some pages that are just expanded versions of each little text window on the main page. If we get around to adding a backend, then I'd hope to make the text dynamic and add options for users to choose their agency, and then sort the information posts depending on which agency/agencies they are most useful for. With how long it's taking me to do the frontend I'm not sure how feasible all of that is but we'll see. For now, just getting the text displaying and a few different decent-looking pages will be good enough.

Another small hurdle will be Azure deployment, since Azure is always annoying to get set up. We'll need someone to put up a free-plan App Service - I've been trying to get a hold of Wayman for that since I don't have permissions to create an App Service but if either of you guys have another way to make one then feel free.


