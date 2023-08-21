# Vue 3 Coding Test

The Galactic Empire's Imperial Navy needs you!
Their most essential app, the Resource Manager, is currently unstable.

### Your Mission: Improve it, You Must!

## Tasks
#### The following are the changes that needs to be implemented:
1. **_Feature_**: Right now all the ships types are displayed in blue inside the `ShipsTable`. Our troops would love to be able to differentiate them in a blink of an eye.  
_Ex: "Star Fighter" => Red color / "Star Destroyer" => Green color / etc.._
 
 
2. **_Feature_**: The `ShipsTable` currently uses the default sorting method defined by the backend (sorting by the id field).  
We want the table to be, by default, sorted by Model name in ascending order!


3. **_Bugfix_**: The pagination is somehow not working! There is no errors but it doesn't reload the data.  
Please fix it, we need to browse the next pages of ships!


4. **_Refactoring_**: Currently the `App` component is retrieving the user data and it passes them to the `HeaderBar` input.  
We would prefer if a new Pinia store would be created to store, access and fetch the user data. Similar to the `ShipsStore`.


5. **_Refactoring_**: We aren't sure what's the point of the `ShipTagsPicker`. Could you make it so we don't need it anymore?  
Basically move the logic to it's parent, the `EditShipDrawer` component.

###
Please be cautious around the refactoring, don't create new bugs please.  
We don't want **Vador**, or worse, **Sidious** to know about all this!
###
Also if you have questions regarding one of the components prefixed by `el-`, as in `el-table-` or `el-tag`,
you must know that those components are coming from the Element Plus UI library.
<br>It's documentation is here: [Element Plus Documentation](https://element-plus.org/en-US/component/button.html).

### May the Dark Side of the Force be with you!.
