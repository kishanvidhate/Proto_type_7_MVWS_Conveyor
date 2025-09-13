const MODEL = {
  "sheet": "Calculation",
  "inputs": [
    {
      "address": "C1",
      "label": "C1",
      "default": 0.0,
      "row": 1
    },
    {
      "address": "C2",
      "label": "Editable Inputs",
      "default": 0.0,
      "row": 2
    },
    {
      "address": "C3",
      "label": "Conveyor Length in meter",
      "default": 172.0,
      "row": 3
    },
    {
      "address": "C4",
      "label": "Conveyor Width  in meter",
      "default": 0.8,
      "row": 4
    },
    {
      "address": "C5",
      "label": "Conveyor No of Belt",
      "default": 2.0,
      "row": 5
    },
    {
      "address": "C6",
      "label": "Advanced inputs (if applicable)",
      "default": 0.0,
      "row": 6
    },
    {
      "address": "C7",
      "label": "The spacing between two spray nozzles shall not exceed 3 m, as per IS:15325:2020 clause 8.7.4.1",
      "default": 3.0,
      "row": 7
    },
    {
      "address": "C8",
      "label": "No of spray nozzles shall consdridied at one location",
      "default": 2.0,
      "row": 8
    },
    {
      "address": "C9",
      "label": "The system pressure shall be 1.4 to 3.5 bar as per IS:15325 clause 8.7.3. For better penetration, 2.1 bar pressure shall be considered at the hydraulically remotest point.",
      "default": 2.1,
      "row": 9
    },
    {
      "address": "C10",
      "label": "No of Linear Heat Sensing Cable is considered for the conveyor, recommended on three sides: top, left, and right.",
      "default": 3.0,
      "row": 10
    },
    {
      "address": "C12",
      "label": "Distance from deluge valve to main hydrant line in Meter",
      "default": 18.0,
      "row": 12
    },
    {
      "address": "C13",
      "label": "Calculation Results",
      "default": 0.0,
      "row": 13
    },
    {
      "address": "C15",
      "label": "Design Density 10.2 lpm/m2 as per IS:15325 Clause No 8.7.2",
      "default": 10.2,
      "row": 15
    },
    {
      "address": "C21",
      "label": "Calculation for K-Factor Selection & Nozzle Flow",
      "default": 0.0,
      "row": 21
    },
    {
      "address": "C24",
      "label": "MVWS Nozzle Selected - Spray Angle",
      "default": 0.0,
      "row": 24
    },
    {
      "address": "C28",
      "label": " Bill of Materials (BOM)",
      "default": 0.0,
      "row": 28
    }
  ],
  "formulas": [
    {
      "address": "C11",
      "label": "Approx. quantity in meter of LHS Cable from conveyor to deluge valve control panel",
      "formula": "=18",
      "row": 11
    },
    {
      "address": "C14",
      "label": "Total Area (In sq. meter) Formula = L x W x Number of Belts",
      "formula": "=(C3*C4*C5)",
      "row": 14
    },
    {
      "address": "C16",
      "label": "Theoretical Water Requirement [L/Min]",
      "formula": "=(C14*C15)",
      "row": 16
    },
    {
      "address": "C17",
      "label": "Theoretical Water Requirement [m^3/h]",
      "formula": "=(C16*0.06)",
      "row": 17
    },
    {
      "address": "C18",
      "label": "MW Water spray nozzle quantity with 5% extra.",
      "formula": "=((C3/C7)*C8)*1.05",
      "row": 18
    },
    {
      "address": "C19",
      "label": "Total Quantity in meter of Linear Heat Sensing Cable in Meter 10% extra.",
      "formula": "=((C3*C10)+C11)*1.1",
      "row": 19
    },
    {
      "address": "C20",
      "label": "Theoretical Flow per Nozzle (L/Min):",
      "formula": "=(C16/C18)",
      "row": 20
    },
    {
      "address": "C22",
      "label": "K-Factor:",
      "formula": "=(C20)/(SQRT(C9))",
      "row": 22
    },
    {
      "address": "C23",
      "label": "MVWS Nozzle Selected - K-Factor ",
      "formula": "=IF(C22<=18,18,IF(C22<=22,22,IF(C22<=26,26,IF(C22<=30,30,IF(C22<=35,35,IF(C22<=41,41,IF(C22<=51,51,IF(C22<=64,64,IF(C22<=79,79,91)))))))))",
      "row": 23
    },
    {
      "address": "C25",
      "label": "Actual Flow Based on K-Factor (L/min) = K-Factor \u00d7 \u221a Pressure \u00d7 Number of Nozzles",
      "formula": "=(C23*(SQRT(C9)*C18))",
      "row": 25
    },
    {
      "address": "C26",
      "label": "Actual Flow Provided Based on K-Factor (m^3/h):",
      "formula": "=(C25*0.06)",
      "row": 26
    },
    {
      "address": "C27",
      "label": "Deluge Valve Selection:",
      "formula": "=IF(OR(C26>1150,C26<10.01),\"Not Found\",IF(C26>=550.01,\"200 mm\",IF(C26>=200.01,\"150 mm\",IF(C26>=100.01,\"100 mm\",IF(C26>=50.01,\"80 mm\",\"50 mm\")))))",
      "row": 27
    },
    {
      "address": "C29",
      "label": "=C27 & \" Cast Iron Deluge Valve with Wet Pilot Basic Trim Assembly\"",
      "formula": "=IF(C27<>\"\",1,\"\")",
      "row": 29
    },
    {
      "address": "C30",
      "label": "=C27 & \" M.S Pipes Heavy C Class As Per IS: 1239 \"",
      "formula": "=(C12)",
      "row": 30
    },
    {
      "address": "C31",
      "label": "=C27& \" G.I. Pipes Heavy C Class As Per IS: 1239\"",
      "formula": "=CEILING(((C3*70%)+C11)*1.1,6)",
      "row": 31
    },
    {
      "address": "C32",
      "label": "=IF(B31=\"200 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"150 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"150 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"100 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"100 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"80 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"80 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"65 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"50 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"50 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"\")))))",
      "formula": "=CEILING(((C3*30%))*1.1,6)",
      "row": 32
    },
    {
      "address": "C33",
      "label": "32 mm G.I. Pipes Heavy C Class As Per IS: 1239",
      "formula": "=CEILING(IF(OR(C8=1,C8=2),0,IF(C8=3,0.4,\"\"))*(C3/C7)*1.1,6)",
      "row": 33
    },
    {
      "address": "C34",
      "label": "25 mm G.I. Pipes Heavy C Class As Per IS: 1239",
      "formula": "=CEILING((C3/C7)*(C8*1.8)*1.1,6)",
      "row": 34
    },
    {
      "address": "C35",
      "label": "=C27 &\" Cast Iron Wafer Type Butterfly Valve\"",
      "formula": "=(C29*4)",
      "row": 35
    },
    {
      "address": "C36",
      "label": "=C27&\" MS Y Type Strainers - Body : MS as per IS1239 (I)\"",
      "formula": "=(C29*1)",
      "row": 36
    },
    {
      "address": "C37",
      "label": "Medium Velocity Water Spray Nozzle Nickel Chrome Plated Brass 1/2\" BSPT",
      "formula": "=(C18)",
      "row": 37
    },
    {
      "address": "C38",
      "label": "Digital Linear Heat Detection Cable Alarm Temperature 70\u2070C",
      "formula": "=(C19)",
      "row": 38
    },
    {
      "address": "C39",
      "label": "Deluge Valve Control Panel Outdoor with Canopy and IP65 Protection ",
      "formula": "=(C29*1)",
      "row": 39
    },
    {
      "address": "C40",
      "label": "Pressure Switch with All Accessories. Range : 2-14 kg.",
      "formula": "=(C29*2)",
      "row": 40
    },
    {
      "address": "C41",
      "label": "24 VDC Solenoid Valve, Operating Pressure: 1 - 20 Bar, 1/2\" BSPT",
      "formula": "=(C29*1)",
      "row": 41
    },
    {
      "address": "C42",
      "label": "Monitor Module, if applicable",
      "formula": "=(C29*2)",
      "row": 42
    },
    {
      "address": "C43",
      "label": "Control  Nodule, if applicable",
      "formula": "=(C29*1)",
      "row": 43
    },
    {
      "address": "C44",
      "label": "12V - 10 AMPS Battery ",
      "formula": "=(C29*2)",
      "row": 44
    },
    {
      "address": "C45",
      "label": "Cables and Accessories",
      "formula": "=(C29*1)",
      "row": 45
    },
    {
      "address": "C46",
      "label": "Other Hardware Like Nut Bolts, U Clamps Anchor Fastener, Flanges & Green Gasket Etc.",
      "formula": "=(C29*1)",
      "row": 46
    },
    {
      "address": "C47",
      "label": "MS Support Made of L Angle, C Channel, & MS Plate Etc.",
      "formula": "=((C30+C31+C32+C33+C34)/3)*3.5",
      "row": 47
    }
  ]
};

function makeEvaluator(state) {
  const fns = {
    IF: (cond, a, b) => cond ? a : b,
    OR: (...args) => args.some(Boolean),
    EVEN: (x) => { const n = Math.ceil(Math.abs(Number(x))); const e = n % 2 === 0 ? n : n + 1; return x < 0 ? -e : e; },
    ROUNDUP: (x, d=0) => { const p = Math.pow(10, d); const xv = Number(x); return Math.sign(xv) * Math.ceil(Math.abs(xv) * p) / p; },
    SQRT: (x) => Math.sqrt(Number(x)),
    CEILING: (x, sig=1) => { const s = Number(sig) || 1; return Math.ceil(Number(x) / s) * s; },
  };
  function getCell(addr) { const v = state[addr]; return (v === "" || v == null) ? 0 : v; }
  function translate(formula) {
    let f = String(formula).trim();
    if (f.startsWith('=')) f = f.slice(1);
    f = f.replace(/<>/g, '!=');
    f = f.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
    f = f.replace(/\b([A-Z]+(\d+))\b/g, (m, a) => "getCell('" + a + "')");
    f = f.replace(/\b(IF|OR|EVEN|ROUNDUP|SQRT|CEILING)\s*\(/g, (m, name) => "fns." + name + "(");
    f = f.replace(/(?<![<>=!])=(?![=])/g, '==');
    f = f.replace(/\^/g, '**');
    return f;
  }
  return function evalFormula(formula) {
    const compiled = translate(formula);
    try {
      const fn = new Function('state','getCell','fns',"return (" + compiled + ");");
      return fn(state, getCell, fns);
    } catch (e) {
      console.warn('Eval error', e, 'Compiled:', compiled);
      return NaN;
    }
  }
}


// Build default state
const defaultState = {};
MODEL.inputs.forEach(inp => { defaultState[inp.address] = typeof inp.default === 'number' ? inp.default : (parseFloat(inp.default) || 0); });
let state = JSON.parse(JSON.stringify(defaultState));

// Identify header marker rows to split groups
const BASIC_MARK = MODEL.inputs.find(i => /Editable Inputs/i.test(i.label));
const ADV_MARK = MODEL.inputs.find(i => /Advanced inputs/i.test(i.label));
const basicStart = BASIC_MARK ? BASIC_MARK.row : 1;
const advStart = ADV_MARK ? ADV_MARK.row : 9999;

const basicInputs = MODEL.inputs.filter(i => i.row > basicStart && i.row < advStart);
const advInputs = MODEL.inputs.filter(i => i.row > advStart);

// DOM
const basicDiv = document.querySelector('#inputs-basic');
const advDiv = document.querySelector('#inputs-adv');
const resultsDiv = document.querySelector('#results');
const bomBody = document.querySelector('#bom');
const resetBtn = document.querySelector('#reset');
const pdfBtn = document.querySelector('#pdf');

function buildInput(wrap, inp) {
  const box = document.createElement('div'); box.className = 'input';
  const label = document.createElement('label'); label.textContent = inp.label || inp.address;
  const input = document.createElement('input'); input.type = 'number'; input.step = 'any'; input.value = state[inp.address] ?? '';
  input.oninput = (e)=>{ const v = parseFloat(e.target.value); state[inp.address] = Number.isFinite(v) ? v : 0; run(); };
  box.appendChild(label); box.appendChild(input); wrap.appendChild(box);
}

function renderInputs() {
  basicDiv.innerHTML = ''; advDiv.innerHTML = '';
  basicInputs.forEach(inp => buildInput(basicDiv, inp));
  advInputs.forEach(inp => buildInput(advDiv, inp));
}

function computeAll() {
  const st = {...state};
  const evalF = makeEvaluator(st);
  // Evaluate formulas in sheet order
  MODEL.formulas.sort((a,b)=>a.row-b.row).forEach(f => { st[f.address] = evalF(f.formula); });
  return st;
}

function renderResults(st) {
  resultsDiv.innerHTML = '';
  // Exclude BOM rows (C29..C47) from results view
  const labels = Object.fromEntries(MODEL.formulas.map(f => [f.address, f.label]));
  MODEL.formulas.forEach(f => {
    const r = f.row;
    if (r >= 29 && r <= 47) return;
    const row = document.createElement('div'); row.className = 'kv row';
    const l = document.createElement('div'); l.className = 'label'; l.textContent = labels[f.address] || f.address;
    const v = document.createElement('div'); v.textContent = st[f.address] === undefined ? '' : String(st[f.address]);
    row.appendChild(l); row.appendChild(v); resultsDiv.appendChild(row);
  });
}

function renderBOM(st) {
  bomBody.innerHTML = '';
  const labels = Object.fromEntries(MODEL.formulas.map(f => [f.address, f.label]));
  for (let r = 29; r <= 47; r++) {
    const addr = 'C' + r; const desc = labels[addr]; if (!desc) continue;
    const qty = st[addr];
    if (qty === '' || qty === null || qty === undefined) continue;
    if (!(typeof qty === 'number' && (Number.isNaN(qty) || qty === 0))) {
      const tr = document.createElement('tr');
      const tdq = document.createElement('td'); tdq.textContent = String(qty);
      const tdd = document.createElement('td'); tdd.textContent = desc;
      tr.appendChild(tdq); tr.appendChild(tdd); bomBody.appendChild(tr);
    }
  }
}

function run() {
  const st = computeAll();
  renderResults(st);
  renderBOM(st);
}

resetBtn.onclick = ()=>{ state = JSON.parse(JSON.stringify(defaultState)); renderInputs(); run(); };
pdfBtn.onclick = ()=> window.print();

renderInputs();
run();
