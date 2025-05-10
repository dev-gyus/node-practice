const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
    static initiate(sequelize) {
        Comment.init({
            commenter: {
                type: Sequelize.INTEGER,
                allowNull: false, // not null
            },
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
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
            modelName: 'Comment',
            // DB에서 사용하는 테이블 명
            tableName: 'comments',
            // paranoid:true 면 해당 row를 삭제할때 deletedAt:true 를 세팅해줌 <- soft delete를 알아서 해준다
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
        )
    }
    
    static associate(db) {
        db.Comment.belongsTo(db.User, { foreginKey: 'commenter', targetKey: 'id' });
    }
}

module.exports = Comment;