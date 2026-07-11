import type BaAwardRecipient from "./BaAwardRecipient";

export default interface BaAward {
      "award_type": number,
      "event_key": string,
      "name": string,
      "recipient_list": BaAwardRecipient[],
      "year": number
    }