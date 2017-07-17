module.exports = function (sequelize, DataTypes) {
    let danmu = sequelize.define('danmu', {
        text: {
            type: DataTypes.STRING,
        },
        mode: {
            type: DataTypes.STRING,
        },
        html: {
            type: DataTypes.BOOLEAN,
        },
        time: {
            type: DataTypes.DOUBLE,
        },
        style: {
            type: DataTypes.JSON,
            defaultValue: {}
        },
        canvasStyle: {
            type: DataTypes.JSON,
            defaultValue: {}
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
    }, {
        tableName: 'danmu',
        timestamps: true,
        classMethods: {
            associate: function (models) {
            }
        }
    });
    return danmu;
};
