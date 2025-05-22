import React, { useEffect, useRef, useState } from 'react';
import './DevBackground.css';

const codeSnippets = [
  'const user = { name: "Sai", role: "DevOps" };',
  'console.log("Hello, developer!");',
  'docker run hello-world',
  'kubectl get pods',
  'terraform apply',
  'aws s3 ls',
  'npx create-react-app my-app',
  'git commit -m "Initial commit"',
  'python3 script.py',
  'node app.js',
  'ansible-playbook site.yml',
  'cloudflared tunnel run',
  'mysql -u root -p',
  'nginx -s reload',
  'scp index.html user@host:/var/www',
  'prometheus --config.file=prometheus.yml',
  'grafana-server web',
  'az pipelines list',
  'gh workflow list',
  'wp plugin install',
];

export default function DevBackground() {
  const [intense, setIntense] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (overlayRef.current && e.target === overlayRef.current) {
        setIntense(true);
      } else {
        setIntense(false);
      }
    };
    const handleMouseLeave = () => setIntense(false);
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.addEventListener('mousemove', handleMouseMove);
      overlay.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (overlay) {
        overlay.removeEventListener('mousemove', handleMouseMove);
        overlay.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className={`dev-bg-overlay${intense ? ' intense' : ''}`}
      ref={overlayRef}
      aria-hidden="true"
    >
      <div className="dev-bg-code-container">
        {codeSnippets.map((snippet, i) => (
          <span key={i} className="dev-bg-code-line" style={{ animationDelay: `${i * 1.2}s` }}>{snippet}</span>
        ))}
      </div>
    </div>
  );
} 