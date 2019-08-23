// #####################################################
// 			TOOL.js 
// #####################################################
//
// - Create Fork,branch,file,pull_request for new entry
//
// #####################################################


// /////////////////////////////////////////////////////
// IMPORTS
// /////////////////////////////////////////////////////
// var GitHub = require('github-api');
// var Repository = require('github-api');
// // import GitHub from "github-api";
// // import Repository from "github-api";
// // import $ from "jquery";
// // import diff from 'deep-diff'; 
// // import "./import-jquery";
// // import "../node_modules/jquery-ui-dist/jquery-ui.js";
// // import request from "request";
// var request = require('request');

// /////////////////////////////////////////////////////
// VARIABLE
// /////////////////////////////////////////////////////

// Pages
// Github repository and user were tools.json are stocked
const gh_bt_user = 'ValentinMarcon';
const gh_bt_repo = 'content';
// Github personal token of the user
const OAUTH = sessionStorage.getItem("access_token");
// Global stock of the user login 
var login="";
// Global stock of all data that we don't want to add to JSON file
var tool_metadata={};


// // /////////////////////////////////////////////////////
// // INIT
// // /////////////////////////////////////////////////////

// // -----------------------------------------------------
// // GITHUB AUTHENTIFICATION
// // -----------------------
// // Use OAUTH asked and stored by log page
// // TODO  CREATE A FUNCTION ON AN OTHER FILE


// // Basic auth on Github API with the token
// var gh = new GitHub({
// 	token: `${OAUTH}`
// });

// // Retrieve user informations
// gh.getUser().getProfile(function(err, profile) { 
// 	if(!profile){
// 		alert("Authentication failure with token ");
// 		location.href = page_home;
// 	}
// 	else {
// 		login = profile["login"];
// 		let avatar = profile["avatar_url"];
// 		$('#username').text(login);
// 		$('#avatar').attr('src', avatar);
// 	}
// });

// // Get the repo where tools.json are stocked
// var repo = gh.getRepo(gh_bt_user,gh_bt_repo);




// // ////////////////////////////////////////////////////
// // FUNCTIONS :
// // ////////////////////////////////////////////////////

// // -----------------------------------------------------
// // UPDATE_HEADER
// // -------------
// // Display tool metadatas in header according to selected tab

// function update_header(id){

// 	// JQUERY select elements
// 	var $title = $('#title');
// 	var $subtitle = $('p#subtitle');
// 	var $subtitle_link = $('a#pr_link');
// 	var $subtitle_date = $('p#pr_date');
// 	var $subtitle_author = $('p#pr_author');
// 	var $subtitle_author_you = $('p#pr_author_you');

// 	// Change Title
// 	$title.text(tool_metadata["name"]);
// 	// Change Bio.tools link (behind title)
// 	$title.attr("href", "https://bio.tools/"+tool_metadata["name"].toLowerCase());

// 	// Empty Metadatas
// 	$subtitle.text("-");
// 	$subtitle_link.text("-");
// 	$subtitle_date.text("-");
// 	$subtitle_author.text("-");
// 	$subtitle_author_you.hide();

// 	// Search the status of the entry (Master,Pull request or New)
// 	var regex = new RegExp("^([a-zA-Z0-9]*)_[a-zA-Z0-9_-]*$");
// 	var status = id.replace(regex, '$1');
// 	var status_converter={"PR":"Pull Request n°","NEW":"New Pull Request n°"};
// 	var status_long=status_converter[status];

// 	// Display metadatas
// 	if (tool_metadata[id]){
// 		var pr_user=tool_metadata[id]['pr_user'];
// 		var pr_link=tool_metadata[id]['pr_link'];
// 		var pr_date=tool_metadata[id]['pr_date'];
// 		var pr_number=tool_metadata[id]['pr_number'];
// 		// USER that made the Pull Request
// 		if (pr_user) {
// 			$subtitle_author.text("By '"+pr_user+"'");
// 			if (pr_user === login) {
// 				$subtitle_author_you.show();
// 			}
// 		}
// 		// LINK and NUMBER of the Pull Request
// 		if (pr_link) {
// 			if (pr_number) $subtitle_link.text(" Pull Request #"+pr_number);
// 			else $subtitle_link.text(" Pull Request");
// 			$subtitle_link.attr("href", pr_link);
// 		}
// 		// DATE of the Pull Request
// 		if (pr_date) {
// 			var day=pr_date.split("T")[0];
// 			var hour=pr_date.split("T")[1];
// 			var print_date=day+" at "+hour.split(":")[0]+":"+hour.split(":")[1];
// 			$subtitle_date.text("Created on "+print_date);
// 		}
// 	}

// 	// Edit status
// 	if (!status_long) {
// 		status_long="Origin";
// 		$subtitle_link.text("Master");
// 		$subtitle_link.attr("href", "https://github.com/"+gh_bt_user+"/"+gh_bt_repo);
// 	}
// 	else if (status="PR") {
// 		status_long += pr_number;
// 	}
// 	$subtitle.text(status_long);

	
// }

// // -----------------------------------------------------
// // SEND_MODIF
// // ----------
// // 1) Get the stored entry (modified by the user)
// // 2) Fork the bio.tools repo into user github
// // 3) Create a new branch on the github repo from the "dev" branch
// // 4) Write a file in this new branch with this new entry
// // 5) Make a pull request to the dev branch
// //
// // TODO : Improve user experience and error management (learn to use promise)
// //

// function send_modif(){
// 	var repo_name=gh_bt_repo;
// 	// If some changes are not validated don't send and show the user the line
// 	if ($('.value_edit').length !== 0) {
// 		alert("Some changes have not been validated");
// 		let pos = $('.value_edit').offset();
// 		let top = pos.top - 100;
// 		let left = pos.left - 20;
// 		window.scrollTo((left < 0 ? 0 : left), (top < 0 ? 0 : top));
// 		return;
// 	}
// 	// If we are here but no changes have been made don't create a pull request
// 	if (!get_stored_entry("changes")){
// 		return;
// 	}
// 	// Ensure the user want to make the PR
// 	if (!confirm("Are you sure to make this Pull Request?")){
// 		return;
// 	}
// 	// Ask if the user allow the app to fork the repo in his Github account
// 	var repo_forked = gh.getRepo(login,repo_name);
// 	if(!repo_forked){
// 		let confirm_fork=confirm("You don't have the repo '"+repo_name+"' forked on your account the app will do it for you. Do you allow it?"); 
// 		if (!confirm_fork){
// 			return;
// 		}
// 	}

// 	show_loader();	
// 	console.log(tool_metadata["tab_active"]+" changes will be recorded");
	
// 	// 1)
// 	// Get the original Entry
// 	var entry=get_stored_entry();
// 	// Edit this entry with modifs
// 	var tab_modif=get_stored_entry(tool_metadata["tab_active"]+"_new");
// 	for (var m in tab_modif){
// 		var modif=tab_modif[m];
// 		entry = edit_dict(entry,modif["path"][0],modif["path"],modif["lhs"]);
// 	}
// 	// Lower Case id of the tool
// 	var tool_name = tool_metadata["name"].toLowerCase();
// 	// File name in which changes will be saved
// 	var file_name=tool_name+".json";
// 	// Path of the file in github
// 	var file_path="data/"+tool_name+"/"+file_name;

// 	var id = tool_metadata["tab_active"];  //TODO top doublon

// 	// UPDATE PULL REQUEST
// 	if ((tool_metadata[id]) && (tool_metadata[id]['pr_user'] === login)){

// 		var pr_number=tool_metadata[id]['pr_number'];	
// 		var my_bt_entry=JSON.stringify(entry, null, " ");
// 		var body_message=get_diff_message(entry);
// 		var branch_origin=tool_metadata[id]['pr_branch'];	

// 		// 2)
// 		// Get the Sha of the file to update
// 		// Can not get the Sha with GET request to the file so do it on the repo...
// 		// Warning: Can change according to the Github API updates
// 		let options = { method: 'GET',
// 		  url: 'https://api.github.com/repos/'+login+'/content/contents/data/'+tool_name+'?ref='+branch_origin 
// 		};
// 		request(options, function (error, res, body) {
// 			if (error) {
// 				hide_loader();	
// 				exit_edit_mode();
// 				alert("Error updating Pull Request \n\n'"+error+"'");
// 				throw new Error(error);
// 			}
// 			var data = JSON.parse(body);
// 			var my_sha ="";
// 			for (var res in data){
// 				if (data[res]["path"] === file_path){
// 					my_sha = data[res]["sha"];
// 				}
// 			}
// 			if (!my_sha){
// 				hide_loader();	
// 				exit_edit_mode();
// 				alert("Error updating Pull Request \n\n'"+data["message"]+"'");
// 				throw new Error(data["message"]);
// 			}
// 			// 3)
// 			// New commit with new content
// 			let options = { method: 'PUT',
// 			url: 'https://api.github.com/repos/'+login+'/content/contents/'+file_path,
// 			headers: 
// 			{ 
// 				authorization: "Basic " + new Buffer(login + ":" + OAUTH).toString("base64"),
// 				'content-type': 'application/json' },
// 				body: 
// 				{ message: 'Update Pull Request n°'+pr_number,
// 				content: new Buffer(my_bt_entry).toString("base64"),
// 				sha: my_sha,
// 				branch: branch_origin },
// 				json: true };
// 				request(options, function (error, res, body) {
// 					if(!body){
// 						hide_loader();	
// 						exit_edit_mode();
// 						alert("Error updating Pull Request \n\n'"+error+"'");
// 						throw new Error(error);
// 					}
// 					else{
// 					// 4)
// 					// Update body message of the PR
// 					var repo_orig = gh.getRepo(gh_bt_user,repo_name);
// 					repo_orig.updatePullRequest(pr_number,{"body": body_message},function(error,res){
// 						if (!res) {
// 							hide_loader();	
// 							exit_edit_mode();
// 							alert("Error updating Pull Request \n\n'"+error+"'");
// 							throw new Error(error);
// 						}
// 						else {
// 							console.log("File updated in https://github.com/"+login+"/"+repo_name+"/tree/"+branch_origin+"/"+file_path);
// 							alert("Update Pull Request Done!");
// 							hide_loader();	
// 							exit_edit_mode();
// 							tab_modif=get_stored_entry(tool_metadata["tab_active"]+"_new");
// 							// Store the diff entry in memory to manipulate the entry later
// 							store_entry(tab_modif,tool_metadata["tab_active"]);
// 							$('.different,.modified_cell').each(function(){
// 								// Create <p> or <a> tag with value
// 								let new_html = linkit(this.firstChild.innerText,this.firstChild.id);
// 								$(this.firstChild).replaceWith(new_html);
// 								$(this).removeClass('modified_cell');
// 								$(this).addClass('different');
// 								$(this).attr('pr_value',$(this).attr('new_value'));
// 								$(this).removeAttr('new_value');
// 								$("#"+this.firstChild.id+"_tr.reset").hide();
// 							});
// 						}
// 					});
// 				}
// 			});
// 		});
// 	}
// 	// NEW PULL REQUEST
// 	else {
		
// 		// Current date
// 		const d = new Date();
// 		const now=d.getFullYear()  + "-" + (d.getMonth()+1) + "-" +  d.getDate() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds() + "-" + d.getMilliseconds();
// 		// Branch name with current date and 'new' tag
// 		var branch_name="new_"+tool_name+"_"+now;
// 		// Origin branch in which the Fork and Pull Request will be done
// 		var branch_origin="dev";
// 		// Convert the entry to JSON to record it on the json file
// 		var my_bt_entry=JSON.stringify(entry, null, " ");
// 		// 2)
// 		// Fork the repo into registered user github (if it dont exist)
// 		repo.fork(function(error,res){
// 			if (!res) {
// 				hide_loader();	
// 				alert("Error creating fork of '"+gh_bt_user+"/"+gh_bt_repo+"' in your Github account");
// 				throw new Error(error);
// 			}
// 			else {
// 				// Retrieve then the forked repo
// 				var repo_forked = gh.getRepo(login,repo_name);
// 				// 3)
// 				// Create the new branch on the forked repo
// 				repo_forked.createBranch(branch_origin,branch_name,function(error,res){
// 					if (!res) {
// 						hide_loader();
// 						alert("Error creating branch '"+branch_name+"' from '"+branch_origin+"'");
// 						throw new Error(error);
// 					}
// 					else {
// 						// 4)
// 						// Create the json file on this new branch on the forked repo
// 						repo_forked.writeFile(branch_name,file_path,my_bt_entry,'Write in '+file_name,{},function(error,res){
// 							if (!res) {
// 								hide_loader();
// 								alert("Error creating file '"+file_name+"' in '"+branch_name+"'");
// 								throw new Error(error);
// 							}
// 							else {
// 								// 5)
// 								// 5.1) Get differences between orig tool entry and new one
// 								var body=get_diff_message(entry);
// 								// 5.2) Create Pull Request from the new branch on the repo forked to the base repository dev branch
// 								var result=repo.createPullRequest({
// 									"title": "Update/create "+file_name,
// 									"body": "Please pull this in!\n--------------------\n"+body,
// 									"head": login+":"+branch_name,
// 									"base": branch_origin
// 								},function(error,res){
// 									if (!res) {
// 										hide_loader();
// 										alert("Error creating Pull Request from '"+login+":"+file_name+"' to origin:'"+branch_origin);
// 										throw new Error(error);
// 									}
// 									else {
// 										console.log("New file writed in https://github.com/"+login+"/"+repo_name+"/tree/"+branch_name+"/"+file_path);
// 										alert("Pull Request Done!");
// 										hide_loader();	
// 										exit_edit_mode();
// 										console.log(res);
// 										let pr_number=res["number"];
// 										let new_name="NEW_PR_"+pr_number+"_"+tool_name;

// 										// Store metadata
// 										tool_metadata[new_name]={};
// 										tool_metadata[new_name]['pr_link']=res["html_url"];
// 										tool_metadata[new_name]['pr_number']=pr_number;	
// 										tool_metadata[new_name]['pr_user']=res['head']['repo']['owner']['login'];
// 										tool_metadata[new_name]['pr_date']=res['created_at'];
// 										tool_metadata[new_name]['pr_branch']=res['head']['ref'];

// 										// Find the diff table of the current tool edited
// 										tab_modif=get_stored_entry(tool_metadata["tab_active"]+"_new");
// 										// Store the json entry in memory to manipulate the entry later
// 										store_entry(tab_modif,new_name);
// 										display_new_entry(tab_modif,new_name);
// 									}
// 								});
// 							}
// 						});
// 					}
// 				});
// 			}
// 		});	
// 	}
// }

// //________________________________________________


function log_in(){
  console.log("w8");
}

function connect(){

	// Basic auth on Github API with the token
	var gh = new GitHub({
		token: "f3fef8c101027706d7872e974077f711678d0386"
	});

	// Retrieve user informations
	gh.getUser().getProfile(function(err, profile) { 
		if(!profile){
			alert("Authentication failure with token ");
			// location.href = page_home;
		}
		// else {
		// 	login = profile["login"];
		// 	let avatar = profile["avatar_url"];
		// 	$('#username').text(login);
		// 	$('#avatar').attr('src', avatar);
		// }
	});

	// Get the repo where tools.json are stocked
	var repo = gh.getRepo(gh_bt_user,gh_bt_repo);

}


// TODO: PROMISE

function new_pr(my_bt_entry){

	/////////////////////////////////////////////////////////////////////////////////////

	console.log("______GO__________");
	console.log(my_bt_entry['name']);

	console.log("______END__________");



// Check_LOGIN()
// .then check_connect()
// .then create_pr()

	

	// /////////////////////////////////////////////////////////////////////////////////////


	// var repo_name=gh_bt_repo;  ////////////////   gh_bt_repo ?????????,
	// // Ensure the user want to make the PR
	// if (!confirm("Are you sure to make this Pull Request?")){
	// 	return;
	// }
	// // Ask if the user allow the app to fork the repo in his Github account
	// var repo_forked = gh.getRepo(login,repo_name);           					 ////////////////   login ????
	// if(!repo_forked){
	// 	let confirm_fork=confirm("You don't have the repo '"+repo_name+"' forked on your account the app will do it for you. Do you allow it?"); 
	// 	if (!confirm_fork){
	// 		return;
	// 	}
	// }

	// // show_loader();	
	// console.log("Changes will be recorded");
	

	// // Lower Case id of the tool
	// var tool_name = my_bt_entry["name"].toLowerCase();
	// // File name in which changes will be saved
	// var file_name=tool_name+".json";
	// // Path of the file in github
	// var file_path="data/"+tool_name+"/"+file_name;

	// // Current date
	// const d = new Date();
	// const now=d.getFullYear()  + "-" + (d.getMonth()+1) + "-" +  d.getDate() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds() + "-" + d.getMilliseconds();
	// // Branch name with current date and 'new' tag
	// var branch_name="new_"+tool_name+"_"+now;
	// // Origin branch in which the Fork and Pull Request will be done
	// var branch_origin="dev";

	// // 2)
	// // Fork the repo into registered user github (if it dont exist)
	// repo.fork(function(error,res){
	// 	if (!res) {
	// 		hide_loader();	
	// 		alert("Error creating fork of '"+gh_bt_user+"/"+gh_bt_repo+"' in your Github account");      ////////////////  gh_bt_user ;  gh_bt_repo
	// 		throw new Error(error);
	// 	}
	// 	else {
	// 		// Retrieve then the forked repo
	// 		var repo_forked = gh.getRepo(login,repo_name);													////////////////  login  ; repo_name
	// 		// 3)
	// 		// Create the new branch on the forked repo
	// 		repo_forked.createBranch(branch_origin,branch_name,function(error,res){
	// 			if (!res) {
	// 				// hide_loader();
	// 				alert("Error creating branch '"+branch_name+"' from '"+branch_origin+"'");
	// 				throw new Error(error);
	// 			}
	// 			else {
	// 				// 4)
	// 				// Create the json file on this new branch on the forked repo
	// 				repo_forked.writeFile(branch_name,file_path,my_bt_entry,'Write in '+file_name,{},function(error,res){
	// 					if (!res) {
	// 						// hide_loader();
	// 						alert("Error creating file '"+file_name+"' in '"+branch_name+"'");
	// 						throw new Error(error);
	// 					}
	// 					else {
	// 						// 5)
	// 						// 5.1) Get differences between orig tool entry and new one
	// 						//var body=get_diff_message(entry);
	// 						// 5.2) Create Pull Request from the new branch on the repo forked to the base repository dev branch
	// 						var result=repo.createPullRequest({
	// 							"title": "Update/create "+file_name,
	// 							"body": "Please pull this in!\n--------------------\n"/*+body*/,
	// 							"head": login+":"+branch_name,
	// 							"base": branch_origin
	// 						},function(error,res){
	// 							if (!res) {
	// 								hide_loader();
	// 								alert("Error creating Pull Request from '"+login+":"+file_name+"' to origin:'"+branch_origin);
	// 								throw new Error(error);
	// 							}
	// 							else {
	// 								console.log("New file writed in https://github.com/"+login+"/"+repo_name+"/tree/"+branch_name+"/"+file_path);
	// 								alert("Pull Request Done!");
	// 								// hide_loader();	
	// 								// exit_edit_mode();
	// 								// console.log(res);
	// 								// let pr_number=res["number"];
	// 								// let new_name="NEW_PR_"+pr_number+"_"+tool_name;

	// 								// // Store metadata
	// 								// tool_metadata[new_name]={};
	// 								// tool_metadata[new_name]['pr_link']=res["html_url"];
	// 								// tool_metadata[new_name]['pr_number']=pr_number;	
	// 								// tool_metadata[new_name]['pr_user']=res['head']['repo']['owner']['login'];
	// 								// tool_metadata[new_name]['pr_date']=res['created_at'];
	// 								// tool_metadata[new_name]['pr_branch']=res['head']['ref'];

	// 								// Find the diff table of the current tool edited
	// 								// tab_modif=get_stored_entry(tool_metadata["tab_active"]+"_new");
	// 								// // Store the json entry in memory to manipulate the entry later
	// 								// store_entry(tab_modif,new_name);
	// 								// display_new_entry(tab_modif,new_name);
	// 							}
	// 						});
	// 					}
	// 				});
	// 			}
	// 		});
	// 	}
	// });	

}














