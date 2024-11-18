const { departments } = require("@/utils/data")

export const fetchDepartment = (data) => {
    return departments.find(dept => dept.link == data);
}