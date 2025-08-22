/* eslint-disable no-console */
import { sm2 } from 'sm-crypto';

import { BaseAsymmetricEncryption } from '../base';

/**
 * SM2 实现
 * 注意生成的公钥必须为04开头 或者使用下面的generateSm2KeyPair生成
 * @see https://tool.hiofd.com/sm2-key-gen/ 这里可以生成04开头的SM2密钥对
 */
export class Sm2Encryption extends BaseAsymmetricEncryption {
  override decrypt(str: string): string {
    return sm2.doDecrypt(str, this.privateKey);
  }

  override encrypt(str: string): string {
    return sm2.doEncrypt(str, this.publicKey);
  }
}

export function generateSm2KeyPair() {
  const { privateKey, publicKey } = sm2.generateKeyPairHex();
  return {
    privateKey,
    publicKey,
  };
}

export function logSm2KeyPair() {
  const { privateKey, publicKey } = generateSm2KeyPair();
  console.log('privateKey', privateKey);
  console.log('publicKey', publicKey);
}
