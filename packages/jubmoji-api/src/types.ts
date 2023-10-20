import { VerificationResult } from "babyjubjub-ecdsa";
import {
  JubmojiInCollection,
  JubmojiInCollectionWithNonce,
  PublicMessageSignature,
} from "./proofs";

export type Jubmoji = {
  pubKeyIndex: number; // Index of the card's public key within the list of public keys
  sig: string; // DER-encoded signature
  // msgNonce and msgRand are the counter and randomness used to generate signatures
  // See: https://github.com/arx-research/libhalo/blob/master/docs/halo-command-set.md#command-sign_random
  msgNonce: number;
  msgRand: string;
  // R, T, U are serialized points on the BabyJubjub curve represented in Edwards form.
  // They are based on the Efficient ECDSA formulation: https://personaelabs.org/posts/efficient-ecdsa-1/
  R: string;
  T: string;
  U: string;
};

export enum ProofType {
  JUBMOJI_IN_COLLECTION = "JUBMOJI_IN_COLLECTION",
  JUBMOJI_IN_COLLECTION_NONCE = "JUBMOJI_IN_COLLECTION_NONCE",
  N_UNIQUE_JUBMOJI_IN_COLLECTION = "N_UNIQUE_JUBMOJI_IN_COLLECTION",
  PUBLIC_MESSAGE_SIGNATURE = "PUBLIC_MESSAGE_SIGNATURE",
}

export const ProofTypeToClass = {
  [ProofType.JUBMOJI_IN_COLLECTION]: JubmojiInCollection,
  [ProofType.JUBMOJI_IN_COLLECTION_NONCE]: JubmojiInCollectionWithNonce,
  [ProofType.N_UNIQUE_JUBMOJI_IN_COLLECTION]: JubmojiInCollection,
  [ProofType.PUBLIC_MESSAGE_SIGNATURE]: PublicMessageSignature,
};

// Defines a class used to create and verify proofs
export interface ProofClass<A, P> {
  prove(proofArgs: A): Promise<P>;

  verify(proof: P): Promise<VerificationResult>;
}

// Defines a constructor for a proof class
// C: Arguments needed to construct the proof class. Should be JSON.stringify-able
// A: Arguments needed to prove the proof
// P: The proof. Should be JSON.stringify-able
export interface ProofClassConstructor<C, A, P> {
  new (classArgs: C): ProofClass<A, P>;
}

// Creates an instance of a proof class
export function createProofInstance<C, A, P>(
  constructor: ProofClassConstructor<C, A, P>,
  args: C
): ProofClass<A, P> {
  return new constructor(args);
}

export interface JubmojiInCollectionClassArgs {
  collectionPubKeys: string[];
  sigNullifierRandomness: string;
  pathToCircuits?: string;
}

export interface JubmojiInCollectionProofArgs {
  jubmoji: Jubmoji;
}

export interface JubmojiInCollectionProof {
  serializedMembershipProof: string;
  usedSigNullifiers?: string[];
}

export interface JubmojiInCollectionWithNonceClassArgs {
  collectionPubKeys: string[];
  sigNullifierRandomness: string;
  pathToCircuits?: string;
}

export interface JubmojiInCollectionWithNonceProofArgs {
  jubmoji: Jubmoji;
}

export interface JubmojiInCollectionWithNonceProof {
  serializedMembershipProof: string;
  msgNonce: number;
  msgRand: string;
  usedSigNullifiers?: string[];
}

export interface NUniqueJubmojiInCollectionClassArgs {
  collectionPubKeys: string[];
  sigNullifierRandomness: string;
  N: number;
  pathToCircuits?: string;
}

export interface NUniqueJubmojiInCollectionProofArgs {
  jubmojis: Jubmoji[];
}

export interface NUniqueJubmojiInCollectionProof {
  serializedMembershipProofs: string[];
  usedSigNullifiers?: string[];
}

export interface PublicMessageSignatureClassArgs {
  randStr?: string;
}

export interface PublicMessageSignatureProofArgs {
  message: string;
  sig: string;
  pubKeyIndex: number;
}

export interface PublicMessageSignatureProof {
  message: string;
  sig: string;
  pubKeyIndex: number;
}