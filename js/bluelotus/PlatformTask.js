var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlatformTaskSchema = new Schema({
    //basic
    taskName: { type: String},
    taskID: { type: String},
    taskSubmitter: { type: String},
    taskSubmitterCategory: { type: String}, //personnel or enterprise
    taskOwner: { type: String}, //(task submitter or delegate)
    taskScale: { type: String},
    taskActive: { type: Boolean, default: true }, //task finished turn false
    taskProgress: { type: Number},
    taskPhase: { type: String, default:''},
    taskStatus: { type: String, default:''},
    taskMode: { type: String, default: ''},
    taskDescription: { type: String, default: ''},
    taskLocation: {
        province: {type: String, default: ''},
        city: {type: String, default: ''}
    },
    taskArea: { type: String, default: ''},
    taskCategory: { type: String, default: ''},
    taskSkills: [{ type: String}],

    //bid proposal (bid mode only)
    taskProposal: [{
        writer: {
            loginname: {type: String},
            avatar: { type: String }
        },
        title: {type: String},
        proposalID: {type: String},		//taskID + "-BP" + 2 digits sequence number
        isChosen: { type: Boolean, default: false}
    }],

    //billing
    taskHoldMoney:{type: Number,default:0},
    taskBilling: {
        total: { type: Number, default: 0},
        paid: { type: Number, default: 0},
        unit: { type: String },
        amountPerUnit: { type: String}
    },

    //participant
    taskCrew: {
        predictNum: { type: String, default: ''},
        participants: [{
            loginname: { type: String },
            costPercentage:{type: Number},
            role: { type: String },
            avatar: { type: String },
            isChosen: { type: Boolean, default: false}
        }]
    },

    //time related
    taskEffectiveBy: {type: Date, default: ""},
    taskIssueDate: {type: Date, default: "" }, //default: 1999 - not issued yet
    taskDuration: {
        unit: { type: String },
        amt: { type: String}
    },
    taskStartDate: {
        predictDate:{type: Date, default: ""},
        actualDate:{type: Date , default: ""}
    },
    taskEndDate: {
        predictDate:{type: Date, default: ""},
        actualDate:{type: Date, default: ""}
    },
    taskCreateTime: { type: Date, default: Date.now },	//maintenance only
    taskUpdateTime:{type: Date, default: Date.now },	//maintenance only
    taskUpdateby: { type: String},

    //advance
    taskIsDelegated : { type: Boolean, default:false }, //true/false
    taskFeasibility: { type: String, default: '2'},
    taskHealth: { type: Number, default: 0 },
    taskUserStoryID: { type: String},
    hasParent:  { type: Boolean, default:false },
    hasChild : { type: Boolean, default:false },
    parentTaskID:{ type: String},
    subTaskID:[{
        taskID: {type: String}
    }],

    //reserved
} );

PlatformTaskSchema.index({taskID: 1}, {unique: true});
PlatformTaskSchema.index({taskUserStoryID: 1});
PlatformTaskSchema.index({taskSubmitter: 1});
PlatformTaskSchema.index({taskOwner: 1});
PlatformTaskSchema.index({taskIssueDate: 1});
PlatformTaskSchema.index({taskProgress: 1});

var PlatformTask = mongoose.model('PlatformTask', PlatformTaskSchema);
module.exports = PlatformTask;