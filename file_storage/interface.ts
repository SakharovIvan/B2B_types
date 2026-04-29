import type { Bucket, BufferedFile, File } from './types';

export interface Bucket_func {
  create_bucket(data: Bucket): Promise<void>;
  get_bucket(id: string): Promise<Bucket>;
  delete_bucket(id: string): Promise<void>;
  get_buckets(data: Partial<Bucket>): Promise<Bucket[]>;
  get_bucket_files(name: string): Promise<File[]>;
  upload_file(file: BufferedFile, bucket_id: string): Promise<void>;
  delete_file(data: { file: File; bucket_id: string }): Promise<void>;
}

export enum FILE_STORAGE_CMDS {
  create_bucket,
  get_bucket,
  delete_bucket,
  get_buckets,
  get_bucket_files,
  upload_file,
  delete_file,
}

export enum FILE_STORAGE_ROUTES {
  MAIN = 'api/file_storage',
  BUCKET = 'bucket',
  BUCKETS = 'buckets',
  FILE = 'file',
}
