var ReactTags = require('react-tag-input').WithContext;
var React  = require('react');
var URL  = require('./../constants.js');
var Ajax = require('./ajax.helpers.js');
var MeetingPersonMode = require('./meeting.person.mode.js');
var Storage = require('./../services/storage.js');

const AutoCompleteWithUsers = React.createClass({
    getInitialState() {
        return {
            ids:[],
            tags: [],
            users:[],
            suggestions: [],
            flag:false,
            url:"",
            editFlag:false,
            usersModeArray : []
        }
    },
    prependTags : function(url) {
          var _this = this;
          _this.setState({
            editFlag:true
          })
          var user_tags = Ajax.getCall(url);
          var temp_tags=[];
          var temp_ids=[];
            user_tags.done(function(result) {
                 for(var i in result) {
                    var temp = {id:"",text:""};
                    temp.id=result[i].id;
                    temp.text=result[i].name;
                    temp_tags.push(temp)
                    temp_ids.push(temp.id);
                 }
                 _this.setState({
                    tags:temp_tags,
                    ids:temp_ids
                 })
            });
            //set the userModeArray
         },

     setUsersModeArray : function(data) {
      console.log("setUsersModeArray" + JSON.stringify(data))
        this.setState({
          usersModeArray :data
        })
     },

    componentWillReceiveProps : function(nextProps) {
        if (nextProps.tags !== this.state.url && nextProps.tags != undefined) {
            this.setState({
              url : nextProps.tags
            })
            this.prependTags(nextProps.tags)
         }
         if(nextProps.usersModeArray != undefined
            && nextProps.usersModeArray !== this.state.url) {
            this.setUsersModeArray(nextProps.usersModeArray)
         }
    },

    componentDidMount :function() {
      var _this = this;
      var users_list =  Ajax.getCall(this.props.url);
      users_list.done(function(result){
           var user_list = [];
           for(var i in result) {
            user_list.push(result[i].username)
         }
         _this.setState({
            suggestions : user_list,
             users:result
          });
      })
    },

    handleDelete(i) {
        let tags = this.state.tags;
        var id = this.state.tags[i].id
        let ids = this.state.ids;
        var index = ids.indexOf(id);
        var roadshow_id = Storage.getRoadshowId();
        var edit = this.props.edit
        if(this.state.editFlag && !edit) {
           var url = URL.can_delete_user + "?user_id=" + id + "&roadshow_id=" + roadshow_id
           var can_edit = Ajax.getCall(url);
           can_edit.done(function(data){
              if(data.message) {
                  var confirm = confirmation();
                  if(confirm) {
                    var url = URL.remove_user_roadshow + "?user_id=" + id + "&roadshow_id=" + roadshow_id
                    var remove_user = Ajax.getCall(url);
                    remove_user.done(function(data){
                    if(data.message) {
                      window.Materialize
                      .toast('User Removed from Roadshow',4000);
                    }
                    });
                    Ajax.getCall()
                  }else {
                    console.log("not confirmed")
                  }
              }
           })
        }else {
            ids.splice(index, 1);
            tags.splice(i, 1);
            this.setState({tags: tags,ids: ids});
            var _usersModeArray = this.state.usersModeArray;
            for(var i in _usersModeArray) {
              if(id == _usersModeArray[i].user_id) {
                _usersModeArray.splice(i, 1);
              }
            }
            this.setState({
              usersModeArray : _usersModeArray
            })
        }
         if(this.props.updateUsers != undefined) {
            var callback = this.props.callbackRemoveUser;
            callback(this.state.usersModeArray);
        }
    },
    handleAddition(tag) {

      //  var filteruserscallback = this.props.filterusers;
        let tags = this.state.tags;
        var flag = false;
        var temp = { id: '', text: '' }
         for(var i in  this.state.users) {
                if(this.state.users[i].username == tag) {
                   temp.id = this.state.users[i].id;
                   temp.text= tag;
                    if(tags.length > 0) {
                      for(var j in tags) {
                        if(tags[j].text == tag) {
                            flag = false;
                            break;
                        }else {
                           flag = true;
                        }
                      }
                    }else {
                      flag = true;
                  }
              }
          }
          if(flag) {
             this.state.ids.push(temp.id);
             //filteruserscallback(temp)
             tags.push(temp);
            }
        this.setState({tags: tags});
        if(this.props.updateUsers != undefined) {
            var callback = this.props.updateUsers;
            callback(this.state.tags);
        }
    },

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;
        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    },
    render() {
        var style = {
             visibility: 'hidden'
        };
        let tags = this.state.tags;
        let suggestions = this.state.suggestions;
        let placeholder = "Type to Add users"
        let ids = this.state.ids

        return (
            <div>
                <ReactTags tags={tags}
                     classNames={{
                      tags: 'tagsClass',
                      tagInput: 'tagInputClass',
                      selected: 'selectedClass',
                      tag: 'chip',
                      remove: 'removeClass',
                      suggestions: 'suggestionsClass'
                    }}
                    placeholder = {placeholder}
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
                    <input type="text" id="users_id" name="users_id"
                      value={this.state.ids.toString()}
                      style={style} />

                      { this.state.tags.length > 0 ? <MeetingPersonMode  callback = {this.props.callback}
                        dataMeetingMode = {this.state.usersModeArray}
                        data = {this.state.tags}/> : null }

            </div>
        )
    }
});

var DeleteModal = React.createClass({
      getInitialState() {
        return {
           url:""
          };
    },

    componentDidMount:function() {
          $('.modal-trigger').leanModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            starting_top: '4%', // Starting top style attribute
            ending_top: '10%', // Ending top style attribute
            ready: function() { alert('Ready'); }, // Callback for Modal open
            complete: function() { alert('Closed'); } // Callback for Modal close
          }
        );

    },

    render : function() {
      return (
        <div>
          <div id="modal-bottom1" className="modal bottom-sheet">
              <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div className="modal-footer">
                <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </div>
            </div>
      )
    }
})

var confirmation = function() {
       var retVal = confirm("This user have appoinments sheduled, Do you want to continue deleting user from this roadshow event?");
       if( retVal == true ) {
          return true;
       }
       else{
          return false;
       }
    }


module.exports = AutoCompleteWithUsers;
