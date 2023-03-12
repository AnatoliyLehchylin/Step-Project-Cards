
import {VisitDentist} from "./classes/VisitDentist.js";
import {VisitTherapist} from "./classes/VisitTherapist.js";
import {VisitCardiologist} from "./classes/VisitCardiologist.js";
import {fetchPOST} from "./Fetch/fetchPOST.js";
import {PaintCard} from "./paintCard.js";


export async function createVisitDentist(obj) {

    const visitDentist = new VisitDentist(obj);

    visitDentist.id = await fetchPOST(visitDentist);

    PaintCard(visitDentist);
}

export async function createVisitTherapist(obj) {

    const visitTherapist = new VisitTherapist(obj);

    visitTherapist.id = await fetchPOST(visitTherapist);

    PaintCard(visitTherapist);
}

export async function createVisitCardiologist(obj) {

    const visitCardiologist = new VisitCardiologist(obj);

    visitCardiologist.id = await fetchPOST(visitCardiologist);

    PaintCard(visitCardiologist);
}