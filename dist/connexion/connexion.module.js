"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnexionModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const connexion_service_1 = require("./connexion.service");
const employe_entity_1 = require("../employes/entities/employe.entity");
const connexion_controller_1 = require("./connexion.controller");
const jwtStrategy_1 = require("./jwtStrategy");
let ConnexionModule = class ConnexionModule {
};
ConnexionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([employe_entity_1.Employes]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: "secretKey",
                signOptions: { expiresIn: "3600s" },
            }),
        ],
        providers: [connexion_service_1.AuthService, jwtStrategy_1.JwtStrategy],
        controllers: [connexion_controller_1.AuthController],
        exports: [connexion_service_1.AuthService],
    })
], ConnexionModule);
exports.ConnexionModule = ConnexionModule;
//# sourceMappingURL=connexion.module.js.map