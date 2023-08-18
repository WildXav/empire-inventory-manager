# Vue 3 Coding Test

The Galactic Empire's Imperial Navy needs you!
Their most essential app, the Resource Manager, is currently unstable.

### Your Mission: Make It More Stable, You Must!

## Tasks
#### The following are the changes that needs to be implemented:

- **_Feature_**: Right now all the ships types are displayed in blue inside the `ShipsTable`. Our troops would love to be able to differentiate them in a blink of an eye.
<br>_Ex: "Star Fighter" => Red color / "Star Destroyer" => Green color / etc.._
- **_Feature_**: The `ShipsTable` currently uses the default sorting method defined by the backend (sorting by the id field).
<br>We want the table to be, by default, sorted by Model name in ascending order!
- **_Bugfix_**: The pagination is somehow not working! There is no errors but it doesn't reload the data.
<br>Please fix it, we need to browse the next pages of ships!
- **_Refactoring_**: Currently the `App` component is retrieving the user data and it passes them to the `HeaderBar` input.
<br>We would prefer if a new Pinia store would be created to store, access and fetch the user data. Similar to the `ShipsStore`.
- **_Refactoring_**: We aren't sure what's the point of the `ShipTagsPicker`. Could you make it so we don't need it anymore?
<br> Basically move the logic to it's parent, the `EditShipDrawer` component.

<br>
Please be cautious around the refactoring, don't create new bugs please.
<br>We don't want **Vador**, or worse, **Sidious** to know about all this!

Also if you have questions regarding one of the components prefixed by `el-`, as in `el-table-` or `el-tag`,
you must know that those components are coming from the Element UI library.
<br>It's documentation is here: https://element-plus.org/en-US/component/button.html

### May the Dark Side of the Force be with you!.
