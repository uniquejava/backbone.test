var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceiverSchema = new Schema({
    userid: { type: String},
    nickname: { type: String},
    loginname: { type: String},
    pass: { type: String },
    email: { type: String},
    role: {type: String , default:'receiver' },
    category: {type: String },  //I = individual, C - Company
    active: { type: Boolean, default: false },
    fullname: { type: String }, // actuall name
    privacy:{ type: String, default:'A' }, //can mail, sms
    url: { type: String },
    profile_image_url: {type: String},
    avatar: { type: String },
    status:  { type: String },
    accessToken: {type: String},
    telephone: [{
        refno:{type: String },
        selfType :{type: String},
        selfStatus:{type: String},
        countrycode:{type: Number},
        areacode:{type: Number},
        phoneno:{type: Number},
        extention:{type: Number},
        oktocall:{type: String},
        oktosms:{type: String}
    }],
    address:
    {
        refno:{type: String },
        selfType:{type: String },
        selfStatus:{type: String },
        country: {type: String },
        province: {type: String },
        city: {type: String },
        district: {type: String },
        street:{type: String },
        block:{type: String },
        building:{type: String },
        zipcode:{type: String },
        freeline:{type: String }
    },
    vip:
    {
        type:{type: String, default:'free' },  //free or gold(付费)
        freelevel:{type: String, default:'1' },
        freesincedate:{type: Date, default: Date.now },
        freelevelupdate:{type: Date },
        goldlevel:{type: String },
        goldsincedate:{type: Date },
        goldenddate:{type: Date }
    },
    signature: { type: String },
    selfTags: [{
        tagText: {type: String}
    }],
    givenTags: [{
        tagText: {type: String}
    }],
    industry:[{type: String}],
    language:[{
        name: { type: String},
        level: { type: String}
    }],
    skill: [{
        area: { type: String},
        category: { type: String},
        name: { type: String},
        level: { type: String},
        expyears:{type: String}
    }],
    techBackground: { type: String },
    projectBackground: { type: String },
    certificates: [{
        name: { type: String},
        year: { type: String},
        level: { type: String}
    }],
    score: { type: Number, default: 0 },
    credit: {
        overall_rating:{type: Number},
        technical_rating:{type: Number},
        communication_rating:{type: Number},
        attitude_rating:{type: Number},
        speed_rating :{type: Number}
    },
    task_history:[{
        loginname:{ type: String},
        taskID:{ type: String},
        taskName:{ type: String},
        taskCategory:{ type: String},
        taskSkill:{ type: String},
        taskBillingTotal:{ type: Number},
        taskStatus:{ type: String},
        taskEndDate:{ type: Date},
        taskBillingEarned: { type: Number,default: 0 },
        technical_rating:{type: Number},
        communication_rating:{type: Number},
        attitude_rating:{type: Number},
        speed_rating :{type: Number},
        rating_date: { type: Date, default: Date.now },
        rating_remark: { type: String}
    }],
    source_referral:{ type: String},
    profile_integrity : { type: Number, default: 0 },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    activiated_at: { type: Date, default: Date.now },
    activiated_count: { type: Number, default: 0 },
    login_at: { type: Date, default: Date.now },
    login_ip: { type: String, default:'0.0.0.0'},
    login_count:{ type: Number, default: 0 },
    login_fail_attempt: { type: Number, default: 0 },
    lock_expire_time: { type: Date, default: Date.now },
    follower_count: { type: Number, default: 0 },
    following_count: { type: Number, default: 0 },
    message_count: { type: Number, default: 0 },
    new_message_count: { type: Number, default: 0 },
    invitation_count:  {type: Number},
    referral_count:  {type: Number},
    tasksdone_count: {type: Number},
    tasksongoing_count: {type: Number},
    hoursspent_sum: {type: Number},
    moneyearned_sum: {type: Number},
    QQ: { type: String },
    weibo: { type: String },
    github_url: { type: String},
    github: { type: String},
    githubId: { type: String},
    githubUsername: {type: String},
    githubAccessToken: {type: String},
    is_block: {type: Boolean, default: false},
    is_star: {type: Boolean, default: false},
    retrieve_time: {type: Number},
    retrieve_key: {type: String},
    creditPoints:  {type: String},		//积分
    creditLevel: 	{type: String},		    //信用等级
    progressValue: {type: String},		//资料完成度
    basicInfoComplete:{type: String},		//基本资料完成项	//e.g. n项/m项

    photos:[{
        name: { type: String},
        addDate: { type: Date, default: Date.now }
    }],

    work_time:{
        specific: {type: Boolean, default: false}, //if true, store in remark
        day:{type: String},
        time: {type: String},
        remark: {type: String}
    },
    salary_expection:
    {
        rate: {type: String},
        salary: {type: String},
        remark: {type: String}
    },
// individual provider info

    leet_code_percentage:{type: Number},
    gender: { type: String},
    date_birth: { type: Date },
    identification: {
        type: { type: String},
        number: { type: String},
        issue_date: { type: Date },
        issue_place: { type: String}
    },
    nationality: { type: String, default:'China'},
    is_student: { type: Boolean, default: false },
    mentor: { type: Boolean, default: false },
    mentee: { type: Boolean, default: false },
    education_level: { type: String},
    education: [{
        university:{ type: String },
        major: { type: String },
        key_class: [{ type: String }],
        date_from: { type: Date },
        date_to: { type: Date }
    }],

    employment: [{
        company: { type: String },
        role: { type: String },
        key_skill: [{ type: String }],
        date_from: { type: Date },
        date_to: { type: Date }
    }],
    yearofexp: {type: String},
    teamInfo: [{
        teamID: { type: String},
        teamName: { type: String},
        join_date: { type: Date }
    }],

// company provider info
    company_number: { type: String},
    company_type: { type: String},
    date_estiblished : { type: Date },
    authorized_capital: {type: Number},
    registration_place: { type: String},
    registration_country: { type: String},
    employee_count: {type: Number},
    entpBackground:{ type: String}, //企业背景
    techService: { type: String}, //企业服务
    serviceSetComplete: {type: String},	//领域与服务总计	//e.g. n项 (用户共填写了多少项服务)
    services:                      //(企业专业领域与服务)
        [
            {
                serviceArea: { type: String},
                serviceCategory: { type: String},
                serviceName: { type: String},
                serviceExpYrs: { type: String}
            }
        ],

    contacts:
        [{
            contactName:	{ type: String},	//姓名
            contactRole:	{ type: String},	//	职务
            contactTelenum:{ type: String},	//	联系电话
            contactAddress:{ type: String},	//	联系地址
            isPrimary: { type: Boolean}	//true/false	是否是第一联系人
        }]
} );

//ReceiverSchema.plugin(BaseModel);


ReceiverSchema.virtual('isAdvanced').get(function () {
    // 积分高于 700 则认为是高级用户
    return this.score > 700 || this.is_star;
});

ReceiverSchema.virtual('avatar_url').get(function () {
    var url = this.avatar || ('https://gravatar.com/avatar/' + utility.md5(this.email.toLowerCase()) + '?size=30');
    return url;
});

ReceiverSchema.method.findSameCity = function (cb) {
    return this.model('ReceiverSchema').find({ city: this.address.city}, cb);
};

ReceiverSchema.statics.findByCity = function (city, cb) {
    return this.find({ "address.city": city}, cb);
};

ReceiverSchema.index({loginname: 1}, {unique: true});
ReceiverSchema.index({email: 1}, {unique: true});
ReceiverSchema.index({score: -1});
ReceiverSchema.index({githubId: 1});
ReceiverSchema.index({accessToken: 1});

var Receiver = mongoose.model('Receiver', ReceiverSchema);
//
//Receiver.findOne({"loginname" : "fuxiaox"}, function (err, r) {
//    if(err) return console.log(err);
//
//    console.log(r);
//});

module.exports = Receiver;