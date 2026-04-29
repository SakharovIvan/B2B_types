export type Bucket = {
  id: string;

  name: string;
  description: string | description;
  isPublic: boolean;
  isProtected: boolean;
  isPrivate: boolean;
  files: File[];
  createdAt: Date;
  updatedAt: Date;
};

export type description = 'product' | 'repair' | 'chat';

export type file_types = 'pdf' | 'png' | 'jpg' | 'document';
export type File = {
  id: string;
  url: string;
  name: string;
  main: boolean;
  type: file_types | string;
  bucket: Bucket;
  createdAt: Date;
  updatedAt: Date;
};

export interface BufferedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: AppMimeType;
  size: number;
  buffer: Buffer | string;
}

export interface StoredFile extends HasFile, StoredFileMetadata {}

export interface HasFile {
  file: Buffer | string;
}
export interface StoredFileMetadata {
  id: string;
  name: string;
  encoding: string;
  mimetype: AppMimeType;
  size: number;
  updatedAt: Date;
  fileSrc?: string;
}

export type AppMimeType = 'image/png' | 'image/jpeg';
