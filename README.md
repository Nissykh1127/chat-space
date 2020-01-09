 # README
 
 ## users_groupsテーブル
 
 |Column|Type|Options|
 |------|----|-------|
 |user_id|integer|null: false, forgin_key: true|
 |group_id|integer|null: false, foregin_key: true|
 
 ### Association
 - belongs_to :gruop
 - belongs_to :user 
 
## usersテーブル

|Culumn|Type|Options|
|------|----|-------|
|name|string|null:false|
|e-mail|text|null:false,e-mail,unique:false|
|password|text|null:false,password,unique.false|

### Association
 - has_many :messages
 - has_many :users_group
 - has_many :groups,through: :users_groups

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null.false|
|image|string|null.false|
|user_id|integer|user, foregin_key:true|
|group_id|inteder|group,foregin_key:true|

### Association
 - belongs_to :users
 - belongs_to :groups

## groupsテーブル

|Column|Type|Options| 
|------|----|-------|
|name|string|null,false|

### Association
 - has_many :messages
 - has_many :users_groups
 - has_many :users,through: :users_groups