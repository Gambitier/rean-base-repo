export type DatabaseType = 'SQL' | 'NoSQL';
export type DatabaseORM = 'Sequelize' | 'Knex' | 'Mongoose' | 'Prisma';
export type DatabaseFlavour = 'MySQL' | 'PostGreSQL' | 'MongoDB';
export type EHRSpecification = 'FHIR' | 'OpenEHR' | 'Mock';
export type FHIRProvider = 'GCP-FHIR' | 'Azure-FHIR' | 'AWS-HealthLake' | 'Hapi-FHIR';
export type OpenEHRProvider = 'OpenEHRBase';
export type FileStorageProvider = 'AWS-S3' | 'GCP-FileStore' | 'Custom';
export type FeatureFlagsProvider = 'Firebase-Remote-Config' | 'Custom';
export type SMSServiceProvider = 'Twilio' | 'Mock';
export type EmailServiceProvider = 'SendGrid' | 'Mock';
export type InAppNotificationServiceProvider = 'Firebase' | 'Mock';
export type EHRProvider = FHIRProvider | OpenEHRProvider;
export type AuthorizationType = 'Custom'; //TBD: Other options need to be supported
export type AuthenticationType = 'Custom'; //TBD: Other options need to be supported

///////////////////////////////////////////////////////////////////////////////////////////

export interface AuthConfig {
    Authentication: AuthenticationType;
    Authorization: AuthorizationType;
}

export interface DatabaseConfig {
    Type: DatabaseType;
    ORM: DatabaseORM;
    Flavour: DatabaseFlavour;
}

export interface FileStorageConfig {
    Provider: FileStorageProvider;
}

export interface TemporaryFoldersConfig {
    Upload: string;
    Download: string;
    CleanupFolderBeforeMinutes: number;
}

export interface FormServiceProvider {
    Provider: string;
    Code: string;
}

export interface Configurations {
    SystemIdentifier: string;
    BaseUrl: string;
    Auth: AuthConfig;
    Database: DatabaseConfig;
    FileStorage: FileStorageConfig;
    TemporaryFolders: TemporaryFoldersConfig;
    MaxUploadFileSize: number;
    JwtExpiresIn: number;
    FormServiceProviders: FormServiceProvider[];
    SessionExpiresIn: number;
}
