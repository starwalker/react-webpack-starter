"use strict";

var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

// Define main application components
var App = require('./App.jsx');
var AppHome = require('./App-home.jsx');

// Define test application components
var Checkbox = require('./checkbox/Checkbox.jsx');
var Notepad = require('./notepad/Notepad.jsx');
var SomePage = require('./some-page/SomePage.jsx');

// Define material-ui components.
var MaterialUI = require('./material-ui/Material-ui.jsx');
var MaterialUIHome = require('./material-ui/pages/Material-ui-home.jsx');
var GetStarted = require('./material-ui/pages/get-started.jsx');

var CssFramework = require('./material-ui/pages/css-framework.jsx');
var Colors = require('./material-ui/pages/css-framework/colors.jsx');
var Typography = require('./material-ui/pages/css-framework/typography.jsx');

var Components = require('./material-ui/pages/components.jsx');
var Buttons = require('./material-ui/pages/components/buttons.jsx');
var DatePicker = require('./material-ui/pages/components/date-picker.jsx');
var Dialog = require('./material-ui/pages/components/dialog.jsx');
var DropDownMenu = require('./material-ui/pages/components/drop-down-menu.jsx');
var IconButtons = require('./material-ui/pages/components/icon-buttons.jsx');
var Icons = require('./material-ui/pages/components/icons.jsx');
var LeftNav = require('./material-ui/pages/components/left-nav.jsx');
var Menus = require('./material-ui/pages/components/menus.jsx');
var Paper = require('./material-ui/pages/components/paper.jsx');
var Sliders = require('./material-ui/pages/components/sliders.jsx');
var Snackbar = require('./material-ui/pages/components/snackbar.jsx');
var Switches = require('./material-ui/pages/components/switches.jsx');
var Tabs = require('./material-ui/pages/components/tabs.jsx');
var TextFields = require('./material-ui/pages/components/text-fields.jsx');
var Toolbars = require('./material-ui/pages/components/toolbars.jsx');

// Define fb react tutorial components
var FbTutorials = require('./fb-tutorials/fb-tutorials.jsx');
var FbTutorialsHome = require('./fb-tutorials/fb-tutorials-home.jsx');
var CommentBox = require('./fb-tutorials/comment-box/Comment-box.jsx');

/** Routes are used to declare your view hierarchy.
  *
  * Say you go to http://localhost:8080/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its
  * handler and its parent handler like so: Paper > Components > Master
  *
  * source -- https://github.com/callemall/material-ui
  */

var AppRoutes = (
  <Route name="root" path="/" handler={App}>
    <Route name="home" handler={AppHome} />
    <Route name="checkbox" handler={Checkbox} />
    <Route name="notepad" handler={Notepad} />
    <Route name="some-page" handler={SomePage} />
    <Route name="fb-tutorials" handler={FbTutorials}>
      <Route name="fb-tutorials-home" handler={FbTutorialsHome} />
      <Route name="comment-box" handler={CommentBox} />
      <Redirect from="/fb-tutorials" to="fb-tutorials-home" />
    </Route>

    <Route name="material-ui" handler={MaterialUI}>
      <Route name="material-ui-home" handler={MaterialUIHome} />
      <Route name="get-started" handler={GetStarted} />

      <Route name="css-framework" handler={CssFramework}>
        <Route name="colors" handler={Colors} />
        <Route name="typography" handler={Typography} />
        <Redirect from="/css-framework" to="colors" />
      </Route>

      <Route name="components" handler={Components}>
        <Route name="buttons" handler={Buttons} />
        <Route name="date-picker" handler={DatePicker} />
        <Route name="dialog" handler={Dialog} />
        <Route name="dropdown-menu" handler={DropDownMenu} />
        <Route name="icon-buttons" handler={IconButtons} />
        <Route name="icons" handler={Icons} />
        <Route name="left-nav" handler={LeftNav} />
        <Route name="menus" handler={Menus} />
        <Route name="paper" handler={Paper} />
        <Route name="sliders" handler={Sliders} />
        <Route name="switches" handler={Switches} />
        <Route name="snackbar" handler={Snackbar} />
        <Route name="tabs" handler={Tabs} />
        <Route name="text-fields" handler={TextFields} />
        <Route name="toolbars" handler={Toolbars} />
        <Redirect from="/components" to="buttons" />
      </Route>
      <Redirect from="/material-ui" to="material-ui-home" />
    </Route>

    <DefaultRoute handler={AppHome} />
  </Route>
);

module.exports = AppRoutes;
