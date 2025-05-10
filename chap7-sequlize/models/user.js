const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false, // not null
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,

            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            }
        }, {
            sequelize,
            // timestamp는 기본적으로 true로 되어있음
            // timestamp:true -> createdAt, updatedAt 컬럼이 defaultValue: Sequlize.NOW 로 설정된게 추가되어 쿼리 발생함
            timestamp: false,
            underscored: false,
            // JS에서 사용하는 이름
            modelName: 'User',
            // DB에서 사용하는 테이블 명
            tableName: 'users',
            // paranoid:true 면 해당 row를 삭제할때 deletedAt:true 를 세팅해줌 <- soft delete를 알아서 해준다
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
        )
    }

    static associate(db) {
        
    }
}

module.exports = User;