import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Member } from "./../../../backend/src/types/Member";
import { fzMembers } from "./../../../backend/data/fzMembers";
import { ctMembers } from "./../../../backend/data/ctMembers";
import { ssMembers } from "./../../../backend/data/ssMembers";
import { csMembers } from "./../../../backend/data/csMembers";

const CardPage = () => {
  const { cardId } = useParams();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    async function fetchData() {
      let data: Member[] = [];

      fetch(`http://localhost:4000/api/${cardId}`)
        .then((res) => res.json())
        .catch((err) => console.error(err));

      if (cardId === "FruitsZipper") {
        data = fzMembers;
      } else if (cardId === "CandyTune") {
        data = ctMembers;
      } else if (cardId === "SweetSteady") {
        data = ssMembers;
      } else if (cardId === "CutieStreet") {
        data = csMembers;
      }

      setMembers(data);
    }

    fetchData();
  }, [cardId]);

  return (
    <div>
      <h1>{cardId}</h1>
      <div className="members-container">
        {members.map((member) => (
          <div key={member.id} style={{ color: `#${member.color}` }}>
            <h2>
              {member.nameK} / {member.nameJ}
            </h2>
            <p>{member.origin}</p>
            <p>{member.birthDate.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
