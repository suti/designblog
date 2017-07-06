``` bash
# install dependencies
npm install

# 本地admin调试
npm run admindev

# 本地blog调试
npm run blogdev

# 单元测试
npm run test -- --env.path=./src/admin/components/editarea/testRTE.js
(测试文件js最好以unit.js命名，方便区分)
```